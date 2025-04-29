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
        console.log('teste click:', $scope.modalActive);
        $scope.modalActive = !$scope.modalActive;
        console.log('teste modalState:', $scope.modalActive);
        
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
            $scope.modalActive = false;
            
        }
    }
});