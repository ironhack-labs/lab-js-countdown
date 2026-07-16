const startButton = document.getElementById("start-btn");
const timeElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const toastMessageElement = document.getElementById("toast-message");
const closeToastButton = document.getElementById("close-toast");

const DURATION = 10;
const TOAST_DURATION = 3000;
let remainingTime = DURATION;
let timer = null;
let toastTimer = null;

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
  showToast("⏰ Final countdown! ⏰");

  timer = setInterval(() => {
    remainingTime -= 1;
    timeElement.textContent = remainingTime;

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;
      startButton.disabled = false;
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  toastMessageElement.textContent = message;
  toastElement.classList.add("show");

  if (toastTimer !== null) {
    clearTimeout(toastTimer);
  }

  toastTimer = setTimeout(() => {
    toastElement.classList.remove("show");
    toastTimer = null;
  }, TOAST_DURATION);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
closeToastButton.addEventListener("click", () => {
  if (toastTimer !== null) {
    clearTimeout(toastTimer);
    toastTimer = null;
  }

  toastElement.classList.remove("show");
});
