const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Function to be triggered on button click
// function startCountdown() {
//   console.log("Countdown started!");
//   // Add your countdown logic here
// }

// // Adding event listener to the start button
document.getElementById("start-btn").addEventListener("click", startCountdown);

const startButton = document.getElementById("start-btn");
if (startButton) {
  startButton.addEventListener("click", startCountdown);
} else {
  console.error("Start button not found.");
}

// // ITERATION 2: Add event listener to the stop button

function startCountdown() {
  console.log("startCountdown called!");
  remainingTime = DURATION; // Reset the remaining time to the initial duration
  const countdownElement = document.getElementById("time");
  if (!countdownElement) {
    console.error("Countdown element not found!");
    return;
  }
  // Clear any existing interval to avoid multiple timers running simultaneously
  if (timer !== null) {
    clearInterval(timer);
  }
  // Update the countdown display immediately
  countdownElement.textContent = remainingTime;
  // Start the countdown interval
  timer = setInterval(() => {
    remainingTime--;
    countdownElement.textContent = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// Example usage:

// // ITERATION 3: Add event listener to the reset button

function showToast(message) {
  console.log("showToast called!");
  const toastElement = document.getElementById("toast");
  if (toastElement) {
    const toastMessage = document.getElementById("toast-message");
    toastMessage.textContent = message;
    toastElement.classList.add("show");
    // Close button functionality
    const closeToast = document.getElementById("close-toast");
    closeToast.addEventListener("click", () => {
      toastElement.classList.remove("show");
    });
    // Automatically hide after 3 seconds
    setTimeout(() => {
      toastElement.classList.remove("show");
    }, 3000);
  } else {
    console.error("Toast element not found.");
  }
}

// const resetButton = document.querySelector(".reset-button");
// resetButton.addEventListener("click", resetCountdown);

// // ITERATION 4: Add event listener to the start button
// const startButton = document.querySelector(".start-button");
// startButton.addEventListener("click", startCountdown);

// // ITERATION 5: Add event listener to the toast button
// const toastButton = document.querySelector(".toast-button");
// toastButton.addEventListener("click", showToast);

// // ITERATION 6: Add event listener to the reset button
// const resetButton = document.querySelector(".reset-button");
// resetButton.addEventListener("click", resetCountdown);

// Your code goes here ...

// ITERATION 2: Start Countdown
// function startCountdown() {
//   console.log("startCountdown called!");

// Your code goes here ...

// ITERATION 3: Show Toast
// function showToast(message) {
//   console.log("showToast called!");

// Your code goes here ...

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
