const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timerElement = document.querySelector("#time");
const toastElement = document.querySelector("#toast");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
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
    toastElement.classList.remove("show");
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
