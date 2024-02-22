const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timerContainer = document.getElementById("time");
// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timer = setInterval(function () {
    startButton.disabled = true;
    remainingTime--;
    timerContainer.innerHTML = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  let toaster = document.getElementById("toast");
  toaster.classList.add("show");
  setTimeout(function () {
    toaster.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  document.getElementById("close-toast").addEventListener("click", function () {
    toaster.classList.remove("show");
  });
}
