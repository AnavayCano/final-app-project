console.log("Script started");

// task name title
function addTaskName(){
    // Get task input
    let taskInput = document.getElementById("task-prompt");
    // Get input value
    let task = taskInput.value;
    // Clear text box
    taskInput.value = "";
    // Get task title element
    let taskTitle = document.getElementById("task-title");
    console.log(taskTitle);
    // Get inner text
    taskTitle.innerText = task;
}

// flashcard buttons
function createFlashcards() {

}

// timer
let timerInterval;
let startSeconds = 25*60;

function startTimer(startSeconds) {
    console.log("timer started");

    // Left off here
}

function changeDisplay() {

}