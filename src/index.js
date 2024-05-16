const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtnElement = document.getElementById("start-btn");
const timerElement = document.getElementById("time");
const toastElement = document.querySelector(".toast");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startBtnElement.addEventListener("click", function () {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  timer = setInterval(() => {
    remainingTime--;
    timerElement.innerText = remainingTime;
    startBtnElement.disabled = true;

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);
}
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  setTimeout(() => {
    toastElement.classList.toggle("show");
  }, 3000);

  toastElement.classList.toggle("show");
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
