const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout = null;

const startButton = document.getElementById(`start-btn`);
const toast = document.getElementById(`toast`);
const closeToastButton = document.getElementById(`close-toast`);
const toastMessage = document.getElementById("toast-message");

startButton.addEventListener("click", startCountdown);
closeToastButton.addEventListener("click", closeToast);

function startCountdown() {
  console.log("startCountdown called!");
  const timeDisplay = document.getElementById("time");
  startButton.disabled = true;
  const countdownIntervall = setInterval(() => {
    remainingTime -= 1;
    timeDisplay.textContent = remainingTime;
    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime <= 0) {
      clearInterval(countdownIntervall);
      showToast("Lift off! 🚀");
      startButton.disabled = false;
    }
  }, 1000);
}

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("show");
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
function closeToast() {
  toast.classList.remove("show");
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
}
