const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtn = document.querySelector("#start-btn");
const timeElement = document.querySelector("#time");
const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const closeToast = document.querySelector("#close-toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
}
startBtn.disabled = true;
updateTimeDisplay();

timer = setInterval(() => {
  remainingTime--;

  if (remainingTime <= 0) {
    clearInterval(timer); // Clear the interval when time is up
    showToast("Lift off! 🚀"); // Show the toast message
  }

  updateTimeDisplay(); // Update the displayed time
}, 1000); // Update every second

function updateTimeDisplay() {
  timeElement.innerText = remainingTime;
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  function showToast(message) {
    console.log("showToast called!");
    toastMessage.innerText = message;
    toast.classList.add("show");

    // Automatically hide the toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove("show");
      startBtn.disabled = false;
      resetCountdown();
    }, 3000);
  }

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
