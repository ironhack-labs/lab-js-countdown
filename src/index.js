const DURATION = 10;
let remainingTime = DURATION;
let timer = null;

const startBtn = document.querySelector("#start-btn");
const timeDisplay = document.querySelector("#time");

const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const closeToast = document.querySelector("#close-toast");

startBtn.addEventListener("click", startCountdown);

function startCountdown() {
  if (timer !== null) return;

  startBtn.disabled = true;
  timeDisplay.textContent = remainingTime;

  showToast("⏰ Final countdown! ⏰");

  timer = setInterval(() => {
    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;
      showToast("Lift off! 🚀", true);
      remainingTime = DURATION;
    } else {
      if (remainingTime === 5) {
        showToast("Start the engines! 💥");
      }
      remainingTime--;
      const randomColor = getRandomColor();
      document.documentElement.style.setProperty("--timer-color", randomColor);
      timeDisplay.textContent = remainingTime;
    }
  }, 1000);
}

function showToast(message, showCloseButton = false) {
  toastMessage.textContent = message;
  toast.classList.add("show");

  if (showCloseButton) {
    closeToast.style.display = "inline";
  } else {
    closeToast.style.display = "none";
  }
}

closeToast.addEventListener("click", () => {
  toast.classList.remove("show");
  startBtn.disabled = false;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
