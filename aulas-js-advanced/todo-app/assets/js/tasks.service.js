window.app.factory("TaskService", function () {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    return {
        getTasks() {
            return tasks;
        },
        addTask(taskTitle, date) {
            tasks.push({
                id: Math.random().toString(36).substring(2, 9),
                title: taskTitle,
                date,
                checked: false
            });
            localStorage.setItem("tasks", JSON.stringify(tasks.map(task => ({id: task.id, title: task.title, date: task.date, checked: task.checked}) )))
        },
        removeTasks(taskId) {
            tasks = tasks.filter((task) => task.id != taskId);
            localStorage.setItem("tasks", JSON.stringify(tasks.map(task => ({ id: task.id, title: task.title, date: task.date, checked: task.checked }))));
        },
        toggleCheck() {
            localStorage.setItem("tasks", JSON.stringify(tasks.map(task => ({id: task.id, title: task.title, date: task.date, checked: task.checked}) )))
        }
    };
});