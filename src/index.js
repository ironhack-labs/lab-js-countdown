const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButton = document.querySelector("#start-btn");
const timeDisplay = document.querySelector("#time");
const toast = document.getElementById("toast");

// ITERATION 1: Add event listener to the start button

document.querySelector("#start-btn").addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  let timeLeft = 10;
  startButton.disabled = true;
  timeDisplay.innerHTML = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timeDisplay.innerHTML = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      startButton.disabled = false;
      showToast();
    }
  }, 1000);
}

// Your code goes here ...

// ITERATION 3: Show Toast
function showToast() {
  console.log("showToast called!");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function showToast(message) {
  // Your code goes here ...
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...
}
