const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let countdownTimer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  // Reset remainingTime to DURATION every time the countdown starts
  remainingTime = DURATION;
  document.getElementById("time").textContent = remainingTime;
  
  // Disable the start button during the countdown
  document.getElementById("start-btn").disabled = true;
  
  // Clear any existing interval to prevent multiple timers
  clearInterval(countdownTimer);
  
  // Start the countdown timer
  countdownTimer = setInterval(() => {
    remainingTime -= 1;
    document.getElementById("time").textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(countdownTimer);
      showToast();
      document.getElementById("start-btn").disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast() {
  const toast = document.getElementById("toast");

  // Show the toast by adding the "show" class
  toast.classList.add("show");

  // Set a timeout to hide the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
