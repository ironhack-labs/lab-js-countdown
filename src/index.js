const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = 10; // Variable to store the interval
const startButton = document.getElementById("start-btn");
const countdown = document.getElementById("time");
const divToast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  startButton.disabled = true;
  countdown.textContent = remainingTime;
  countdownInterval = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      showToast("Lift off! 🚀");
      return;
    }
    remainingTime--;
    countdown.textContent = remainingTime;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastMessage.textContent = message;
  divToast.classList.add("show");
  setTimeout(() => divToast.classList.remove("show"), 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
