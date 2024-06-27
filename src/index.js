const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

document.addEventListener("DOMContentLoaded", () => {
  // ITERATION 1: Add event listener to the start button
  const startButton = document.getElementById("start-btn");
  if (startButton) {
    startButton.addEventListener("click", startCountdown);
  } else {
    console.error("Start button not found.");
  }

  // ITERATION 2: Start Countdown
  function startCountdown() {
    console.log("startCountdown called!");

    remainingTime = DURATION; // Reset the remaining time to the initial duration
    const countdownElement = document.getElementById("time");

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

  // ITERATION 3: Show Toast
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
});
