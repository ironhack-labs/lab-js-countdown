const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
function startCountdown() {
  console.log("Countdown started!");
}
// Your code goes here ...
const btn = document.querySelector("#start-btn");
btn.addEventListener("click", startCountdown());

// ITERATION 2: Start Countdown
function startCountdown() {
  let remainingTime = 10;

  const startButton = document.getElementById("start-btn");
  startButton.disabled = true;

  const timeDisplay = document.getElementById("time");
  timeDisplay.textContent = remainingTime;

  const intervalId = setInterval(() => {
    remainingTime--;

    timeDisplay.textContent = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(intervalId);

      showToast();
      startButton.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  function showToast() {
    const toast = document.getElementById("toast");
    const closeToast = document.getElementById("close-toast");

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);

    closeToast.addEventListener("click", () => {
      toast.classList.remove("show");
    });
  }

  document
    .getElementById("start-btn")
    .addEventListener("click", startCountdown);
  document
    .getElementById("start-btn")
    .addEventListener("click", startCountdown);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
