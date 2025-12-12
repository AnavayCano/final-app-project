console.log("Script started");

// Global variables
let taskNames = [];
let sessionsCompleted = 0;
let breaksTaken = 0;
let isPaused = false;
let isReset = false;
let clickCount = 0;
let flipCount = 0;

// task name title
function addTaskName() {
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
}


let flashcardQuestions = [];
let flashcardAnswers = [];
// flashcards
function getFlashcards() {
    for(let i = 0; i < 2; i++) {
    let cardQuestion = prompt("Enter your flashcard question.");
    let cardAnswer = prompt("Enter your flashcard answer.");

    flashcardQuestions.push(cardQuestion);
    flashcardAnswers.push(cardAnswer);
    }

    console.log(flashcardQuestions);
    console.log(flashcardAnswers);

    displayFlashCards();
}


let cardFront = document.getElementById("card-body");
let flipButton = document.getElementById("flip-card");
let currQuestion = 0;
function displayFlashCards() {
    cardFront.innerHTML = flashcardQuestions[currQuestion];

    // Flip button
    flipButton.addEventListener("click", flipCard);

    // Next button
    let nextButton = document.getElementById("next-card");
    nextButton.addEventListener("click", goToNextCard);

    // Previous card button
    let backButton = document.getElementById("prev-card");
    backButton.addEventListener("click", goToPreviousCard);

    let cardNumber = document.getElementById("card-number");
    cardNumber.innerHTML = currQuestion + 1;


    
}

let currAnswer = 0;
function flipCard() {
    console.log("card flipped");

    flipCount++;

    let cardFrontContainer = document.getElementById("card-front-view");
    cardFrontContainer.classList.toggle("flipped");

    cardFront.innerHTML = flashcardAnswers[currAnswer];

    flipButton.innerHTML = "Un-flip";

    if(flipCount == 2) {
        cardFront.innerHTML = flashcardQuestions[currQuestion];
        console.log(cardFront.innerHTML);
        cardFrontContainer.classList.toggle("flip-backwards");
        flipButton.innerHTML = "Flip";
        flipCount = 0;
    }
}

function goToNextCard() {
    // Reset flip button
    flipCount = 0;
    flipButton.innerHTML = "Flip"

    // Display next card
    currQuestion++;
    displayFlashCards();
    currAnswer++;
}

function goToPreviousCard() {
    // Reset flip button
    flipCount = 0;
    flipButton.innerHTML = "Flip";

    // Display previous card
    currQuestion--;
    displayFlashCards();
    currAnswer--;
}

// timer
let startSeconds = 1 * 5;

function startTimer() {

    let timer = setInterval(function () { //Ai suggested the use of set interval
        console.log("timer started");


        // Check if pause button was clicked
        if (isPaused) {
            return;
        }

        // Check if reset button was clicked
        if (isReset) {
            clearInterval(timer);
            resetTimer();
            return;
        }

        // Minus one every second or countdown
        startSeconds--;

        // Convert seconds to MM:SS format
        let minutes = Math.floor(startSeconds / 60);

        let seconds = startSeconds % 60;


        // Get timer display
        let timerDisplay = document.getElementById("time");

        // Update timer display
        timerDisplay.innerHTML = minutes + ":" + seconds;

        if (seconds <= 9) {
            timerDisplay.innerHTML = minutes + ":0" + seconds;
        }

        // Keep count of breaks and update display
        countBreaks(timer);

    }, 1000)
}

// Keeps count of breaks
function countBreaks(t) {
    let breakCount = document.getElementById("break-count");
    if (startSeconds == 0) {

        alert("Break time!! (click ok to start your break.)");
        clearInterval(t)

        startBreakTimer(5*1);
    }
}


function startBreakTimer (breakSeconds) {
        pauseTimer();

        let breakTimer = setInterval(function() {
            if(breakSeconds == 0) {
                clearInterval(breakTimer);
                alert("Break Over!! (click ok to continue studying.)");
                
            let breakCount = document.getElementById("break-count");

                // Add to break count
                breaksTaken++;
                breakCount.innerHTML = breaksTaken;

                // reset seconds
                breakSeconds = 5*60;

                // reset main timer seconds
                startSeconds = 25*60;
                isPaused = false;
            }

            let breakTimerDisplay = document.getElementById("break-timer");
        
            // Minus one every second or countdown
            breakSeconds--;

            // Convert seconds to MM:SS format
            let displayMinutes = Math.floor(breakSeconds / 60);

            let displaySeconds = breakSeconds % 60;

            // Update timer display
            breakTimerDisplay.innerHTML = displayMinutes + ":" + displaySeconds;

            if (breakSeconds <= 9) {
                breakTimerDisplay.innerHTML = displayMinutes + ":0" + displaySeconds;
            }
        }, 1000)
}

// timer buttons
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

function pauseTimer() {
    console.log("timer paused");

    clickCount++;

    isPaused = true;
    pauseButton.innerHTML = "Unpause";

    // Check if button is clicked again
    if (clickCount == 2) {
        pauseButton.innerHTML = "Pause"
        isPaused = false;
        clickCount = 0;
    }
}

function resetTimer() {
    console.log("timer reset");

    isReset = true;
    // Set seconds to 1500
    startSeconds = 25 * 60;

    // Convert seconds to MM:SS format
    let minutes = Math.floor(startSeconds / 60);

    let seconds = startSeconds % 60;

    // Get timer display
    let timerDisplay = document.getElementById("time");

    // Update timer display
    timerDisplay.innerHTML = minutes + ":" + seconds;

    if (seconds <= 9) {
        timerDisplay.innerHTML = minutes + ":0" + seconds;
    }
}

function endSession() {
    sessionsCompleted++;

    console.log(sessionsCompleted);
}
