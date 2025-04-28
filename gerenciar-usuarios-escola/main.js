const app = angular.module('usersModule', []);

app.controller('usersController', function ($scope, $timeout) {
    $scope.message = "Bem-vindo ao sistema de cadastro escolar";

    $scope.showAlert = true;
    $timeout(function() {
        $scope.showAlert = false;
    }, 5000);

    $scope.users = [
        { nome: "João", tipo: "Aluno" },
        { nome: "Felipe", tipo: "Professor" },
        { nome: "Enzo", tipo: "Aluno" },
        { nome: "Cintia", tipo: "Professor" }
    ];
});