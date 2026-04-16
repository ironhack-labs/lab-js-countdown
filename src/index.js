const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimer = null;

const timeElement = document.querySelector("#time");
const startButton = document.querySelector("#start-btn");
const toastElement = document.querySelector("#toast");
const toastMessageElement = document.querySelector("#toast-message");
const closeToastButton = document.querySelector("#close-toast");


// ITERATION 1: Add event listener to the start button

startButton.addEventListener("click", startCountdown);
closeToastButton.addEventListener("click", () => {
  clearTimeout(toastTimer);
  toastTimer = null;
  toastElement.classList.remove("show");
});



// ITERATION 2: Start Countdown
function startCountdown() {
  remainingTime = DURATION;
  timeElement.textContent = remainingTime;
  startButton.disabled = true;
  clearInterval(timer);

  showToast("\u23F0 Final countdown! \u23F0");

  timer = setInterval(() => {
    remainingTime -= 1;
    timeElement.textContent = remainingTime;

    if (remainingTime === 5) {
      showToast("Start the engines! \uD83D\uDCA5");
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;
      startButton.disabled = false;
      showToast("Lift off! \uD83D\uDE80");
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  clearTimeout(toastTimer);
  toastMessageElement.textContent = message;
  toastElement.classList.add("show");

  toastTimer = setTimeout(() => {
    toastElement.classList.remove("show");
    toastTimer = null;
  }, 3000);
}
