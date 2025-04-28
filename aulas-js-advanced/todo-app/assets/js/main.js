const app = angular.module("taskModule" , [])

app.controller("TaskController", function ($scope, $filter) {
    $scope.modalActive = false;

    $scope.showCompletedOnly = false;
    $scope.showUncompletedOnly = false;
    $scope.showForTodayOnly = false;
    $scope.today = new Date().toLocaleDateString();

    $scope.tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    $scope.taskInput = {
        title: "",
        date: "",
    }

    $scope.filteredTasks = function() {
        let filtered = $filter("filter")(
            $filter("filter")(
                $scope.tasks,
                $scope.showCompletedOnly ? {checked: true} : {}
            ),
            $scope.showUncompletedOnly ? {checked: false} : {}
        );

        if($scope.showForTodayOnly) {
            const start = new Date();
            start.setHours(0);
            start.setMinutes(0);
            start.setSeconds(0);
            start.setMilliseconds(0);
            const end = new Date();
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);
            end.setMilliseconds(999);

            filtered = filtered.filter((task) => {
                const date = new Date(task.date);
                return(date.getTime() >= start.getTime() && date.getTime() <= end.getTime())
            });
        }
        console.log(filtered);
        return filtered;
    }

    $scope.toggleModal = () => {
        $scope.modalActive = !$scope.modalActive;
    }

    $scope.handleSubmitAddTask = () => {
        const title = $scope.taskInput.title
        const date = $scope.taskInput.date
        if(!title || !date) return

        $scope.tasks.push({
            id: Math.random().toString(36).substring(2, 9),
            title: title,
            date: date,
            checked: false
        })

        localStorage.setItem("tasks", JSON.stringify($scope.tasks.map(task => ({id: task.id, title: task.title, date: task.date}) )))

        $scope.toggleModal()
        $scope.taskInput.title = "";
        $scope.taskInput.date = "";
    }

    $scope.toggleCheckedTask = () => {
        localStorage.setItem("tasks", JSON.stringify($scope.tasks.map(task => ({id: task.id, title: task.title, date: task.date}) )))
    }

    $scope.deleteTask = (currentTask) => {
        $scope.tasks = $scope.tasks.filter((task) => task.id != currentTask.id)
        localStorage.setItem("tasks", JSON.stringify($scope.tasks.map(task => ({id: task.id, title: task.title, date: task.date}) )))
    }
})