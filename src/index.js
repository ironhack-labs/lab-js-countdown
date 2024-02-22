const DURATION = 1; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const timeElement = document.getElementById("time");
const startButton = document.getElementById("start-btn");
const toastElement = document.getElementById("toast");
const closeToastElement = document.getElementById("close-toast");

startButton.addEventListener("click", startCountdown);
closeToastElement.addEventListener("click", closeToast);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startButton.toggleAttribute("disabled");

  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Countown finished!");
    }
  }, 1000);
}
// Your code goes here ...

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add("show");
  setTimeout(() => {
    console.log("showToast GONE!");
    toastElement.classList.remove("show");
  }, "3000");

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
}
function closeToast() {
  toastElement.classList.remove("show");
  // Your code goes here ...
}
