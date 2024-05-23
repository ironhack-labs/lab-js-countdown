const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeoutID = null;

const timeDiv = document.querySelector("#time");
timeDiv.textContent = remainingTime;
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);
const toastDiv = document.querySelector("#toast");
const closeSpan = document.querySelector("#close-toast");
closeSpan.addEventListener("click", closeToast);

// ITERATION 2: Start Countdown
function startCountdown() {
    if (remainingTime === 10) {
        showToast("⏰ Final countdown! ⏰");
    }
    remainingTime--;
    timeDiv.textContent = remainingTime;
    timer = setInterval(() => {
        remainingTime--;
        timeDiv.textContent = remainingTime;
        if (remainingTime === 5) {
            showToast("Start the engines! 💥");
        }
        if (remainingTime === 0) {
            clearInterval(timer);
            showToast("Lift off! 🚀");
            return;
        }
    }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
    toastDiv.children[0].textContent = message;
    toastDiv.classList.add("show");

    timeoutID = setTimeout(() => {
        toastDiv.classList.remove("show");
    }, 3000);
}
function closeToast() {
    toastDiv.classList.remove("show");
    clearTimeout(timeoutID);
}
