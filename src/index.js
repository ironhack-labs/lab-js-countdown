let DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtn = document.querySelector("#start-btn");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  const timerEl = document.querySelector("#time");
  let time = setInterval(() => {
    DURATION--;
    if (DURATION <= 0) {
      clearInterval(time);
      showToast("Lift off! 🚀");
    }
    timerEl.innerHTML = DURATION;
  }, 1000);
  startBtn.disabled = true;
  console.log("startCountdown called!");

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastDiv = document.querySelector(".toast");
  const toastBox = document.querySelector("#toast-message");
  toastBox.innerHTML = message;
  toastDiv.classList.toggle("show");
  setTimeout(() => {
    toastDiv.classList.toggle("show");
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
