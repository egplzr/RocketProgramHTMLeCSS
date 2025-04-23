class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }

    set name(name) {
        this._name = name;
    }
    set email(email) {
        this._email = email;
    }
    set password(password) {
        this._password = password;
    }

    showProfile() {
        return `<h2>Seu Perfil</h2>
                <p><strong>Nome:</strong> ${this._name}</p>
                <p><strong>Email:</strong> ${this._email}</p>`;
    }
}