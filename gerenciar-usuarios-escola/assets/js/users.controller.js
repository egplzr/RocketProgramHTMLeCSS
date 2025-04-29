const app = angular.module('usersModule', []);

app.controller('usersController', function ($scope, $timeout) {
    $scope.message = "Bem-vindo ao sistema de cadastro escolar";
    $scope.typeFilter = '';
    $scope.search = '';

    $scope.showAlert = true;
    $timeout(function () {
        $scope.showAlert = false;
    }, 5000);

    $scope.users = [
        { nome: "João", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Felipe", tipo: "Professor", dataCadastro: new Date(2025, 3, 15) },
        { nome: "Enzo", tipo: "Aluno", dataCadastro: new Date(2024, 12, 31) },
        { nome: "Cintia", tipo: "Professor", dataCadastro: new Date(2025, 4, 25) },
        { nome: "Bowser", tipo: "Professor", dataCadastro: new Date(2025, 4, 25) },
        { nome: "Mario", tipo: "Aluno", dataCadastro: new Date(2025, 6, 12) },
        { nome: "Luigi", tipo: "Professor", dataCadastro: new Date(2025, 2, 27) }
    ];
});