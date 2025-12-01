const DURATION = 5; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const timerId = document.getElementById("time");
const startBtn = document.getElementById("start-btn");
const toast = document.querySelector("div#toast");
const closeMessage = document.querySelector("toast-message");
const closeX = document.querySelector("close-toast");

// ITERATION 1: Add event listener to the start button
startBtn.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown

function startCountdown() {
  startBtn.disabled = true;
  timerId.innerText = remainingTime;
  timer = setInterval(() => {
    remainingTime--;
    timerId.innerText = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      startBtn.disabled = false;
      showToast();
      remainingTime = DURATION;
      timerId.innerText = remainingTime;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  console.log("showToast called!");
}

// ITERATION 4: Toast Close Button

// ITERATION 5: More Toasts
