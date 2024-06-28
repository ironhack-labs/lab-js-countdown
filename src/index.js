const DURATION = 10;
let remainingTime = DURATION;

const time = document.getElementById("time");

const showToast = (message) => {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  const toastMessage = document.getElementById("toast-message");
  toastMessage.innerHTML = message;
  const toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
  const closeButton = document.getElementById("close-toast");
  closeButton.addEventListener("click", () => {
    toast.classList.remove("show");
    time.innerHTML = DURATION;
    clearTimeout(toastTimer);
  });
};

const startCountdown = () => {
  startButton.disabled = true;
  const countdown = setInterval(() => {
    time.innerHTML = remainingTime;
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      startButton.disabled = false;
      clearInterval(countdown);
      showToast("Lift off! 🚀");
      time.innerHTML = DURATION;
      remainingTime = DURATION;
    }
    remainingTime--;
  }, 1000);
};

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);
