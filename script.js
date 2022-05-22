var tasks = {};

var date = moment().format("MMM Do YYYY"); 
$("#currentDay").append(date);

var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

