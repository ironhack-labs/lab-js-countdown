const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const toast = document.querySelector("#toast");
const messageSpan = document.querySelector("#toast-message");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  const countdown = document.querySelector("#time");

  let i = 10;
  const IntervalId = setInterval(() => {
    if (i >= 0) countdown.innerHTML = i;
    if (i === 10) {
      message = "⏰ Final countdown! ⏰";
      showToast(message);
    } else if (i === 5) {
      message = "Start the engines! 💥";
      showToast(message);
    }
    if (!i) {
      message = "Lift off! 🚀";
      clearInterval(IntervalId);
      showToast(message);
    }
    i--;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  messageSpan.innerText = message;
  toast.classList.add("show");

  // set timeout and store ID
  const timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeBtn = document.querySelector("#close-toast");
  closeBtn.addEventListener("click", () => {
    clearTimeout(timeoutId);
    toast.classList.remove("show"); // Immediately remove the toast on click
  });
}
