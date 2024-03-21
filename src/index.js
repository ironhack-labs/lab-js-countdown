const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
// views div

const toastView = document.querySelector("#toast");

// Your code goes here ...
const btnStart = document.querySelector("#start-btn");
btnStart.addEventListener("click", function () {
  startCountdown();
  this.disabled = true;
});

// ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...
  showTimer();
  timer = setInterval(() => {
    if (remainingTime == 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      btnStart.disabled = false;
      remainingTime = DURATION;
      return;
    }
    if (remainingTime == 5) {
      showToast("Start the engines! 💥");
    }
    if (remainingTime == 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    remainingTime--;
    showTimer();
  }, 1000);
}

function showTimer() {
  const timeRemainingContainer = document.getElementById("time");
  timeRemainingContainer.innerText = `${remainingTime}`;
}

// ITERATION 3: Show Toast
function showToast(message) {
  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  toastView.classList.add("show");
  const toastMessageContainer = document.getElementById("toast-message");
  toastMessageContainer.innerText = message;

  setTimeout(() => {
    toastView.classList.remove("show");
  }, 3000);

  document.getElementById("close-toast").addEventListener("click", function () {
    toastView.classList.remove("show");
  });
}
