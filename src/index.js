const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimer = null;

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
const timeDiv = document.querySelector("#time");
const toastDiv = document.querySelector("#toast");
const closeToastBtn = document.querySelector("#close-toast");
const displayedMessage = document.querySelector("#toast-message");

startBtn.addEventListener("click", startCountdown);
closeToastBtn.addEventListener("click", closeToastHandler);

timeDiv.innerHTML = remainingTime;

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...

  startBtn.disabled = true;
  
  if (remainingTime === 10) {
    showToast("⏰ Final countdown! ⏰");
  }
  
  timer = setInterval(() => {
    remainingTime--;
    timeDiv.innerHTML = remainingTime;
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastDiv.classList.add("show");
  displayedMessage.innerHTML = message;

  setTimeout(closeToastHandler, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
function closeToastHandler() {
  toastDiv.classList.remove("show");
}
