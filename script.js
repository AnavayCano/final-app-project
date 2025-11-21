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
let startSeconds = 25*60;

function startTimer(startSeconds) {
    console.log("timer started");

    // Get timer display
    let timerDisplay = document.getElementById("time");
    console.log(timerDisplay);
    
}

function countdown() {
    startSeconds--;

    let sessionsCompleted = [];
    let breakCount = document.getElementById("break-count");
    if(startSeconds == 0) {
        sessionsCompleted++;
        breakCount.innerHTML = sessionsCompleted;
    }
}

function changeDisplay() {

}