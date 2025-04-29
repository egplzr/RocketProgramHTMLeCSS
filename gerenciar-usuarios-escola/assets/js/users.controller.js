const app = angular.module('usersModule', []);

app.controller('usersController', function ($scope, $timeout, UserService) {
    $scope.message = "Bem-vindo ao sistema de cadastro escolar";
    $scope.typeFilter = '';
    $scope.search = '';
    $scope.modalActive = false;

    $scope.newUser = {
        nome: '',
        tipo: ''
    }

    $scope.toggleModal = function() {
        $scope.modalActive = !$scope.modalActive;
        
        if (!$scope.modalActive) {
            $scope.newUser = {
                nome: '',
                tipo: ''
            };
        }
    };

    $scope.showAlert = true;
    $timeout(function () {
        $scope.showAlert = false;
    }, 5000);

    $scope.users = UserService.getUsers();

    $scope.deleteUser = function(index) {
        UserService.deleteUser(index);
    };

    $scope.addNewUser = function() {
        if ($scope.newUser.nome && $scope.newUser.tipo) {
            UserService.addUser($scope.newUser.nome, $scope.newUser.tipo);

            $scope.newUser = {
                nome: '',
                tipo: ''
            }

            
        }
    }
});