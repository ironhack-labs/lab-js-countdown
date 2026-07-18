const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startButton = document.getElementById("start-btn");
const timeElement = document.getElementById("time");

// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  if (timer !== null) {
    return;
  }

  remainingTime = DURATION;
  timeElement.textContent = remainingTime;
  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime -= 1;
    timeElement.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
