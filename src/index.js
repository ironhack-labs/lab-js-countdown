const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let countdownTimer = 10;
  startBtn.disabled = true;

  const IntervalTimer = setInterval(() => {
    countdownTimer--;

    // Your code goes here ...
    document.getElementById("time").textContent = countdownTimer;

    if (countdownTimer === 0) {
      clearInterval(IntervalTimer);
      startBtn.disabled = false;
      showToast();
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast() {
  console.log("showToast called!");
  const toastMsg = document.getElementById("toast");
  toastMsg.classList.add("show");

  // Your code goes here ...
  setTimeout(() => {
    toastMsg.classList.remove("show");
  }, 3000);

  // startBtn.addEventListener("click", startCountdown);
}
