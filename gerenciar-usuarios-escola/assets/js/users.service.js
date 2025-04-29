app.factory("UserService", function(){
    let users = [
        { nome: "João", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Felipe", tipo: "Professor", dataCadastro: new Date(2025, 3, 15) },
        { nome: "Enzo", tipo: "Aluno", dataCadastro: new Date(2024, 12, 31) },
        { nome: "Cintia", tipo: "Professor", dataCadastro: new Date(2025, 4, 25) }
    ];

    return{
        addUser(name, type){
            users.push({
                nome: name,
                tipo: type,
                dataCadastro: new Date()
            });
        },
        getUsers(){
            return users;
        },
        deleteUser(index){
            users.splice(index, 1);
        }
    }
});