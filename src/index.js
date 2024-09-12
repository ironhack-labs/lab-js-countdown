const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-btn");

  startButton.addEventListener("click", startCountdown);
});

function startCountdown() {
  const toastMessage = document.getElementById("toast-message");
  toastMessage.textContent = "Countdown started! 🕒";

  const toast = document.getElementById("toast");
  toast.style.display = "block";
  // Additional logic for your countdown can be added here
}

// ITERATION 2: Start Countdown
function startCountdown() {
  const startButton = document.getElementById("start-btn");
  startButton.disabled = true;

  let remainingTime = 10;
  const timeElement = document.getElementById("time");

  const countdownInterval = setInterval(() => {
    timeElement.textContent = --remainingTime;
    if (remainingTime === 0) {
      clearInterval(countdownInterval);
      startButton.disabled = false;
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

function showToast(message) {
  const toastMessage = document.getElementById("toast-message");
  toastMessage.textContent = message;
  const toast = document.getElementById("toast");
  toast.style.display = "block";
}

console.log("startCountdown called!");

// Your code goes here ...

// ITERATION 3: Show Toast
function showToast(message) {
  const toastMessage = document.getElementById("toast-message");
  toastMessage.textContent = message;

  const toast = document.getElementById("toast");
  // Add the "show" class to display the toast
  toast.classList.add("show");

  // Set a timeout to hide the toast after 3 seconds
  setTimeout(() => {
    // Remove the "show" class to hide the toast
    toast.classList.remove("show");
  }, 3000);
}

console.log("showToast called!");

// Your code goes here ...

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
