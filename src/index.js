const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const toastAt10 = "⏰ Final countdown! ⏰";
const toastAt5 = "Start the engines! 💥";
const toastAt0 = "Lift off! 🚀";

const startBtn = document.querySelector("#start-btn");
const timeElement = document.querySelector("#time");
const toastDivElement = document.querySelector("#toast");
const toastMessageElement = document.querySelector("#toast-message");
const toastMessageCloseBtn = document.querySelector("#close-toast");

// ITERATION 1: Add event listener to the start button

startBtn.onclick = () => startCountdown();

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startBtn.disabled = true;

  const timerInterval = setInterval(() => {
    timeElement.innerText = remainingTime;
    if (remainingTime === 10) showToast(toastAt10);
    else if (remainingTime === 5) showToast(toastAt5);
    else if (remainingTime === 0) {
      showToast(toastAt0);
      setTimeout(() => resetTimer(), 4000);
      clearInterval(timerInterval);
    }
    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastMessageElement.innerText = message;
  toastDivElement.classList.add("show");
  setTimeout(() => {
    toastDivElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  toastMessageCloseBtn.onclick = () => toastDivElement.classList.remove("show");
}

function resetTimer() {
  remainingTime = DURATION;
  timeElement.innerText = remainingTime;
  startBtn.disabled = false;
}
