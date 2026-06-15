const DURATION = 10;
let remainingTime = DURATION;
let timer = null;

const startBtn = document.getElementById("start-btn");
const timeDisplay = document.getElementById("time");
const toastCard = document.getElementById("toast");
const closeToast = document.getElementById("close-toast");

// ITERATION 1
startBtn.addEventListener("click", startCountdown);

// ITERATION 2
function startCountdown() {
  startBtn.disabled = true;
  remainingTime = DURATION;

  showToast("⏰ Final countdown! ⏰");

  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.textContent = remainingTime;

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3 + 4 + 5
function showToast(message) {
  document.getElementById("toast-message").textContent = message;
  toastCard.classList.add("show");

  let toastTimeout = setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000);

  // ITERATION 4
  closeToast.onclick = () => {
    clearTimeout(toastTimeout);
    toastCard.classList.remove("show");
  };
}