const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startButton = document.querySelector("#start-btn");
const time = document.querySelector("#time");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  remainingTime = 10;
  console.log("startCountdown called!");
  timer = setInterval(() => {
    startButton.disabled = true;
    if (remainingTime <= 0) {
      clearInterval(timer);
      startButton.disabled = false;
      return;
    }
    remainingTime--;
    time.innerText = remainingTime;
  }, 1000);
}

// Your code goes here ...

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
