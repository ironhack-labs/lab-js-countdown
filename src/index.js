const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


const startButton = document.getElementById("start-btn");
const toast = document.getElementById("toast");
const closetoast = document.getElementById("close-toast");
const closeMessage = document.getElementById("toast-message");
const timerElement = document.getElementById("time");

startButton.addEventListener("click", () => {
  startCountdown();
});

closetoast.addEventListener("click", () => {
  clearInterval(timer);
  toast.classList.remove("show");
  timerElement.innerText = DURATION;
  startButton.disabled = false;
});

function startCountdown() {
  remainingTime = DURATION;

  timer = setInterval(() => {
    remainingTime -= 1;
    if (remainingTime >= 0) {
      startButton.disabled = true;
      timerElement.innerText = remainingTime;
      if (remainingTime === 9) {
        showToast("⏰ Final countdown! ⏰");
      } else if (remainingTime === 5) {
        showToast("Start the engines! 💥");
      }
    } else {
      showToast("Lift off! 🚀");
      startButton.disabled = false;
      clearInterval(timer);
    }
  }, 1000);
}

function showToast(message) {
  closeMessage.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
