const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startBtn = document.getElementById("start-btn");
const timeDisplay = document.getElementById("time");
const toast = document.getElementById("toast");
const closeToast = document.getElementById("close-toast");

startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startBtn.disabled = true;
  remainingTime = DURATION;
  timeDisplay.textContent = remainingTime;

  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startBtn.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toastMessage = document.getElementById("toast-message");
  toastMessage.textContent = message;

  toast.classList.add("show");

  const timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToast.addEventListener("click", () => {
    clearTimeout(timeout);
    toast.classList.remove("show");
  });
}
