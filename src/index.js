const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("start-btn")
    .addEventListener("click", startCountdown);
});

// ITERATION 2: Start Countdown
function updateDisplay() {
  document.getElementById("time").textContent = remainingTime;
}
function startCountdown() {
  console.log("startCountdown called!");
  const startButton = document.getElementById("start-btn");
  startButton.disabled = true;
  remainingTime = DURATION;
  updateDisplay();

  if (timer) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    remainingTime--;
    updateDisplay();
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast();
      startButton.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastElement = document.getElementById("toast");

  // Show the toast
  toastElement.classList.add("show");
  setTimeout(() => {
    // Hide the toast
    toastElement.classList.remove("show");
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  function showToast() {
    console.log("showToast called!");

    const toastElement = document.getElementById("toast");
    const closeButton = document.getElementById("close-toast");
    let timeoutId;

    toastElement.classList.add("show");

    timeoutId = setTimeout(() => {
      toastElement.classList.remove("show");
    }, 3000);

    closeButton.addEventListener("click", () => {
      clearTimeout(timeoutId);
      toastElement.classList.remove("show");
    });
  }
}
