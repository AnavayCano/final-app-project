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

let timer = setInterval(function() {
    console.log("timer started");

    // Minus one every second
    startSeconds--;

    // Convert seconds to MM:SS format
    let minutes = Math.floor(startSeconds/60);

    let seconds = startSeconds % 60;

    
    // Get timer display
    let timerDisplay = document.getElementById("time");

    // Update timer display
    timerDisplay.innerHTML = minutes + ":" + seconds;

    if(seconds <= 9) {
        timerDisplay.innerHTML = minutes + ":0" + seconds;
    }

    // Keep count of breaks and update display
    countBreaks();
    clearInterval(timer);
    
}, 1000)

function countBreaks() {
    let sessionsCompleted = 0;
    let breakCount = document.getElementById("break-count").innerHTML;
    if(startSeconds == 0) {
        sessionsCompleted++;
        breakCount= sessionsCompleted;
    }
    console.log(breakCount);
}