const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout = null;

// ITERATION 1: Add event listener to the start button

const timeElement = document.querySelector("#time");
const startButton = document.querySelector("#start-btn");
const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const closeToast = document.querySelector("#close-toast");

startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

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
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toastMessage.textContent = message;
  toast.classList.add("show");

  if (toastTimeout !== null) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
    toastTimeout = null;
  }, 3000);
}

closeToast.addEventListener("click", () => {
  toast.classList.remove("show");

  if (toastTimeout !== null) {
    clearTimeout(toastTimeout);
    toastTimeout = null;
  }
});
