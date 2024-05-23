const counter = 10; // 10 seconds
let remainingTime = counter; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout = null;
const startButton = document.querySelector("#start-btn");
const toast = document.querySelector(".toast");
const closetoast = document.querySelector("#close-toast");
const toastMessage = document.querySelector("#toast-message");
const timerElement = document.querySelector("#time");

// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", () => {
  startCountdown();
});

closetoast.addEventListener("click", () => {
  toast.classList.remove("show");
  clearTimeout(toastTimeout);
});

function showToast(message) {
  toastMessage.innerText = message;
  toast.classList.add("show");
  toastTimeout = setTimeout(() => {
    console.log("execution");
    toast.classList.remove("show");
  }, 3000);
}

function startCountdown() {
  remainingTime = counter;
  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime -= 1;
    timerElement.innerText = remainingTime;

    if (remainingTime === counter - 1) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === counter / 2) {
      showToast("Start the engines! 💥");
    } else if (remainingTime <= 0) {
      timerElement.innerText = remainingTime;
      showToast("Lift off! 🚀");
      clearInterval(timer);
      setTimeout(() => {
        timerElement.innerText = counter;
        startButton.disabled = false;
      }, 3000);
    }
  }, 1000);
}
