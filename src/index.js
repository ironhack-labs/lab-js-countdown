const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let intervalId = null; // Variable to store the interval
const timerElement = document.querySelector("#time");
const toastElement = document.querySelector("#toast");
// ITERATION 1: Add event listener to the start button
const startCountdownElement = document.querySelector("#start-btn");
startCountdownElement.addEventListener(`click`, () => {
  console.log(`counting`);
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  intervalId = setInterval(() => {
    console.log(remainingTime);
    remainingTime--;
    timerElement.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(intervalId);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add("show");

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
