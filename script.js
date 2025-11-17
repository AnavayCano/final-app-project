console.log("Script started");

function addTaskName(){
    // Get task input
    let taskInput = document.getElementById("task-prompt");
    // Get input value
    let task = taskInput.value;
    // Get task title element
    let taskTitle = document.getElementById("task-title");
    console.log(taskTitle);
    // Get inner text
    taskTitle.innerText = task;
}