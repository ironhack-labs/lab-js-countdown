const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", startCountdown);

function startCountdown() {
  const timeDisplay = document.querySelector("#time");
  startButton.disabled = true;
  timeDisplay.textContent = remainingTime;

  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.querySelector(".toast");
  const toastMessage = document.querySelector("#toast-message");

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
