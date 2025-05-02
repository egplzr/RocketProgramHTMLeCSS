app.controller('usersController', function ($scope, $timeout, UserService) {
    $scope.message = "Bem-vindo ao sistema de cadastro escolar";
    $scope.typeFilter = '';
    $scope.search = '';
    $scope.modalActive = false;

    $scope.users = UserService.getUsers();
    $scope.loading = false;
    $scope.mensagemErro = "";
    $scope.mensagemSucesso = "";
    $scope.newUser = { nome: "", email: "", tipo: "" };

    $scope.toggleModal = function () {
        console.log('teste click:', $scope.modalActive);
        $scope.modalActive = !$scope.modalActive;
        console.log('teste modalState:', $scope.modalActive);

        if (!$scope.modalActive) {
            $scope.newUser = {
                nome: '',
                email: '',
                tipo: ''
            };
        }
    };

    $scope.showAlert = true;
    $timeout(function () {
        $scope.showAlert = false;
    }, 5000);

    $scope.users = UserService.getUsers();

    $scope.deleteUser = function (index) {
        UserService.deleteUser(index);
    };

    $scope.addNewUser = function (form) {
        if (form.$invalid) return;

        $scope.loading = true;
        $scope.mensagemErro = "";
        $scope.mensagemSucesso = "";

        UserService.salvar($scope.newUser)
            .then(function () {
                $scope.mensagemSucesso = "Usuário adicionado com sucesso!";
                $scope.newUser = { nome: "", email: "", tipo: "" };
                form.$setPristine();
                form.$setUntouched();
            })
            .catch(function (err) {
                $scope.mensagemErro = err;
            })
            .finally(function () {
                $timeout(function () {
                    $scope.loading = false;
                }, 0);
            });
    };
});