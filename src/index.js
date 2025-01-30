const DURATION = 10;
let remainingTime = DURATION;
let timer = null;

document.getElementById("start-btn").addEventListener("click", startCountdown);

function startCountdown() {
  const timeDisplay = document.getElementById("time");
  const startButton = document.getElementById("start-btn");
  startButton.disabled = true;
  remainingTime = DURATION;
  timeDisplay.textContent = remainingTime;

  showToast("⏰ Final countdown! ⏰");
  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.textContent = remainingTime;
    if (remainingTime === 5) showToast("Start the engines! 💥");
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startButton.disabled = false;
    }
  }, 1000);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  const closeToast = document.getElementById("close-toast");
  toastMessage.textContent = message;
  toast.classList.add("show");

  let timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  closeToast.onclick = () => {
    clearTimeout(timeout);
    toast.classList.remove("show");
  };
}
