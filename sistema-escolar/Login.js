class Login {
    static _users = [
        new Student("Enzo Guedes", "enzo@alpar.com", "aluno123", "4º Ano A"),
        new Student("Fulaninho da Silva", "fulano@alpar.com", "aluno321", "4º Ano B"),
        new Teacher("Felipe Lima", "felipe@alpar.com", "professor123", "Matemática"),
        new Teacher("Cintia Oliveira", "cintia@alpar.com", "professor321", "Português")
    ];

    get users() {
        return this._users;
    }

    static verifyLogin(email, password) {
        return this._users.find(user => user.email === email && user.password === password);
    }

    static saveUser(user) {
        const userData = {
            name: user.name,
            email: user.email,
            password: user.password,
            type: user instanceof Student ? 'student' : 'teacher',
            ...(user instanceof Student ? {schoolClass: user.schoolClass} : {subject: user.subject})

            //Esses três pontos é chamado de spread operator, sua função é pegar um objeto e espalhar suas propriedades dentro de outro.
            //Então o código entre () usa operadores ternários para verificar se o objeto é uma instância de Student ou Teacher e retorna
            //um objeto com o atributo de acordo com o resultado do ternário, os atributos desse objeto são espalhados dentro do userData
            //pelo spread operator(...)
        }

        localStorage.setItem('saveLoggedUser', JSON.stringify(userData));
    }

    //Métodos de manipulação do DOM

    static loadNextPage(e) {
        if (e) e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = Login.verifyLogin(email, password);

        if(user) {
            Login.saveUser(user);
            window.location.href = 'profile.html';
        } else {
            document.getElementById('errorMessage').style.display = 'block';
        }
    }

    static loadProfile() {
        const userData = JSON.parse(localStorage.getItem('saveLoggedUser'));
        
        const profileContent = document.getElementById('profileContent');
        
        let html = `
            <h2>Perfil de ${userData.type === 'student' ? 'Aluno' : 'Professor'}</h2>
            <div class="card mb-3">
                <div class="card-body">
                    <p><strong>Nome:</strong> ${userData.name}</p>
                    <p><strong>Email:</strong> ${userData.email}</p>`;
        
        if (userData.type === 'student') {
            html += `<p><strong>Turma:</strong> ${userData.schoolClass}</p>`;
        } else {
            html += `<p><strong>Matérias:</strong> ${userData.subject}</p>`;
        }
        
        html += `
                </div>
            </div>`;
        
        profileContent.innerHTML = html;
    }

    //métodos para manipular os event listeners

    static init() {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) loginForm.addEventListener('submit', Login.loadNextPage);

        const profileContent = document.getElementById('profileContent');
        if (profileContent) Login.loadProfile();
    }
}

document.addEventListener('DOMContentLoaded', Login.init);