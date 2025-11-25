console.log("Script started");

let taskNames = [];
let sessionsCompleted = [];
let isPaused = false;
let isReset = false;

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
    // Get inner text
    taskTitle.innerText = task;
    // Add task name to array
    taskNames.push(task);
    console.log(taskNames);
}

// flashcard buttons
function createFlashcards() {

}

// timer
let startSeconds = 25*60;

function startTimer() {
    let timer = setInterval(function() {
    console.log("timer started");

    // Check if pause button was clicked
    if(isPaused){
        return;
    }

    // Check if reset button was clicked
    if(isReset) {
        resetTimer();
    }

    // Minus one every second or countdown
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


}, 1000)
}

// Keeps count of breaks
function countBreaks() {
    let sessionsCompleted = 0;
    let breakCount = document.getElementById("break-count").innerHTML;
    if(startSeconds == 0) {
        sessionsCompleted++;
        breakCount= sessionsCompleted;
    }
}

// timer buttons
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

function pauseTimer() {
    console.log("timer paused");

    isPaused = true;
    pauseButton.innerHTML = "Unpause";

    // Check if button is clicked again


    // Continue timer

    // Keep current count of seconds
    let curr = startSeconds;
    
}


function resetTimer() {
    console.log("timer reset");

    isReset = true;
    // Clear timer interval
    
    // Call start timer function
}