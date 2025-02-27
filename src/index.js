const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("time");
const toastElement = document.getElementById("toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  timer = setInterval(() => {
    remainingTime--;
    timerElement.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toastElement.classList.add("show");
  setTimeout(() => {
    toastElement.style.displa = "none";
  }, 3000);
}

closeElement.addEventListener("click", () => {
  remainingTime = 0;
  timerElement.innerText = remainingTime;
  toastElement.classList.remove("show");
});
