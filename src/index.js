const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// Get DOM elements
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const closeToast = document.getElementById('close-toast');

// ITERATION 1: Add event listener to the start button
startButton.addEventListener('click', () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Disable start button during countdown
  startButton.disabled = true;

  // Reset remaining time
  remainingTime = DURATION;

  // Update time display immediately
  updateTimeDisplay();

  // Show initial toast message
  showToast("⏰ Final countdown! ⏰");

  // Start countdown interval
  timer = setInterval(() => {
    remainingTime--;
    updateTimeDisplay();

    // Show different messages at specific times
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    // Check if countdown is complete
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startButton.disabled = false; // Enable start button after countdown
    }
  }, 1000); // Interval of 1 second
}

// Function to update time display
function updateTimeDisplay() {
  timeDisplay.textContent = remainingTime;
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Display toast with message
  toastMessage.textContent = message;
  toast.classList.add('show');

  // Hide toast after 3 seconds
  setTimeout(() => {
    hideToast();
  }, 3000);
}

// Function to hide toast
function hideToast() {
  toast.classList.remove('show');
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
closeToast.addEventListener('click', () => {
  clearTimeout();
  hideToast();
});
