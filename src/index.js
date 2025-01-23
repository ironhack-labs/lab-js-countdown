const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn");
const timeDisplay = document.getElementById("time");
const toast = document.getElementById("toast");
const closeToast = document.getElementById("close-toast");
startButton.addEventListener("click", startCountdown);
closeToast.addEventListener("click", hideToast);
// ITERATION 2: Start Countdown
let countdownInterval;
function startCountdown() {
  console.log("startCountdown called!");

  let remainingTime = 10;
  startButton.disabled = true;
  timeDisplay.textContent = remainingTime;
  countdownInterval = setInterval(() => {
    remainingTime -= 1;
    if (remainingTime > 0) {
      timeDisplay.textContent = remainingTime;
    } else {
      clearInterval(countdownInterval);
      timeDisplay.textContent = "0 ";
      startButton.disabled = false;
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast() {
  toast.style.display = "block";

  setTimeout(() => {
    hideToast();
  }, 3000);
}
function hideToast() {
  toast.style.display = "none";
}
