const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout = null; //timeout for hiding the toast

// DOM elements
const startBtn = document.getElementById('start-btn');
const timeDisplay = document.getElementById('time');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const closeToastBtn = document.getElementById('close-toast');

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtn.addEventListener('click', startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  if (timer !== null) return;

  // Reset remaining time
  remainingTime = DURATION;
  timeDisplay.textContent = remainingTime;

  // Disable the start button while counting down
  startBtn.disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    // Update UI
    timeDisplay.textContent = remainingTime;

    // When it reaches 0, stop timer and show toast
    if (remainingTime <= 0) {
      clearInterval(timer);
      timer = null;
      showToast('Lift off! 🚀');
      // Re-enable button
      startBtn.disabled = false;
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  // Clear any existing toast timeout
  if (toastTimeout) {
    clearTimeout(toastTimeout);
    toastTimeout = null;
  }

  // Set message if provided
  toastMessage.textContent = message;

  // Add the class that makes toast visible
  toast.classList.add('show');

  // After 3 seconds, hide toast
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
    toastTimeout = null;
  }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
