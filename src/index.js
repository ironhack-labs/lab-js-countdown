const DURATION = 3; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let startBtn = document.getElementById("start-btn");
let timeCount = document.getElementById("time");
let toastEl = document.getElementById("toast");
let closeToastEl = document.getElementById("close-toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

// ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...
  const myTimer = setInterval(() => {
    if (remainingTime >= 0) {
      timeCount.innerText = remainingTime;
      startBtn.style.cursor = "not-allowed";
    } else {
      clearInterval(myTimer);
      remainingTime = 0;
      showToast();
      console.log("Interval Cleared!");
    }
    remainingTime--;
  }, 1000);
  console.log("startCountdown called!");
}

// ITERATION 3: Show Toast
function showToast(message) {
  toastEl.style.visibility = "visible";
}
// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
function closeToast() {
  if ((toastEl.style.visibility = "visible")) {
    toastEl.style.visibility = "hidden";
  }
}

startBtn.addEventListener("click", () => {
  startCountdown();
});
closeToastEl.addEventListener("click", () => {
  closeToast();
});
