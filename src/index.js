const DURATION = 10;
let remainingTime = DURATION;
let timer = null;
const startBtn = document.querySelector("#start-btn");
const timeDisplay = document.querySelector("#time");
const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const closeToastBtn = document.querySelector("#close-toast");

let toastTimeout = null;

startBtn.addEventListener("click", startCountdown);

function startCountdown() {
  console.log("startCountdown called!");

  startBtn.disabled = true;

  remainingTime = DURATION;
  timeDisplay.textContent = remainingTime;

  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.textContent = remainingTime;

    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startBtn.disabled = false;
    }
  }, 1000);
}

function showToast(message) {
  console.log("showToast called!");

  toastMessage.textContent = message;

  toast.classList.add("show");

  if (toastTimeout) clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

closeToastBtn.addEventListener("click", () => {
  if (toastTimeout) clearTimeout(toastTimeout);
  toast.classList.remove("show");
});
