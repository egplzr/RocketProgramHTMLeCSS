app.factory("UserService", ["$q", function ($q) {
    let users = [
        { nome: "João", email: "joao@email.com", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Felipe", email: "felipe@email.com", tipo: "Professor", dataCadastro: new Date(2025, 3, 15) },
        { nome: "Enzo", email: "enzo@email.com", tipo: "Aluno", dataCadastro: new Date(2024, 12, 31) },
        { nome: "Cintia", email: "cintia@email.com", tipo: "Professor", dataCadastro: new Date(2025, 4, 25) }
    ];

    return {
        getUsers() {
            return users;
        },
        deleteUser(idx) {
            users.splice(idx, 1);
        },
        salvar(usuario) {
            return $q(function (resolve, reject) {
                setTimeout(function () {
                    if (usuario.email === "erro@teste.com") {
                        reject("Erro ao cadastrar o usuário. Tente novamente.");
                    } else {
                        usuario.dataCadastro = new Date();
                        users.push(angular.copy(usuario));
                        resolve();
                    }
                }, 2000);
            });
        }
    };
}]);