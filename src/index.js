const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.getElementById("start-btn");
const timeElement = document.getElementById("time");

startBtn.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...

  let intervalId = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(intervalId);
      showToast();
    }
  }, 1000);
}

const list = document.getElementById("toast").classList;

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  list.add("show");
  setTimeout(() => {
    document.getElementById("toast").classList;
    list.remove("show");
  }, 3000);
}

// Your code goes here ...

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
const closeBtn = document.getElementById("close-toast");

closeBtn.addEventListener("click", () => {
  document.getElementById("toast").classList;
  list.remove("show");
});
