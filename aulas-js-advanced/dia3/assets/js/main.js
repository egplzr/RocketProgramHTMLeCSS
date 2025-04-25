const app = angular.module('taskModule', []);

app.controller('taskController', function($scope) {
    $scope.message = "Olá mundo!";
});