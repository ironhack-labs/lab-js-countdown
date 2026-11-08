const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const countDownButton = document.querySelector("#start-btn");

countDownButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  document.querySelector("#start-btn").disabled = true;

  timer = setInterval(() => {
    remainingTime = remainingTime - 1;

    timeDisplay.textContent = remainingTime;
  }, 1000);

  const timeDisplay = document.querySelector("#time");

  if (remainingTime === 0) {
    clearInterval(timer);
    showToast();
  }
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
