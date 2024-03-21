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
  timer = DURATION;
  let countDownInterval = setInterval(() => {
    if (timer == 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    timer--;
    showTimer();
    if (timer == 5) {
      showToast("Start the engines! 💥");
    }
    if (timer == 0) {
      clearInterval(countDownInterval);
      showToast("Lift off! 🚀");
      btnStart.disabled = false;
    }
  }, 1000);
}

function showTimer() {
  const timeRemainingContainer = document.getElementById("time");
  timeRemainingContainer.innerText = `${timer}`;
}

// ITERATION 3: Show Toast
function showToast(message) {
  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  toastView.classList.add("show");
  const toastMessageContainer = document.getElementById("toast-message");
  toastMessageContainer.innerText = message;

  document.getElementById("close-toast").addEventListener("click", function () {
    toastView.classList.remove("show");
  });
}
