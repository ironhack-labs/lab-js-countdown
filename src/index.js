const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
const timeElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const toastMessElement = document.getElementById("toast-message");
const closeToastButton = document.getElementById("close-toast");

closeToastButton.addEventListener("click", closeToast);

startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...

  timer = setInterval(() => {
    remainingTime--;

    switch (remainingTime) {
      case 10:
        showToast("⏰ Final countdown! ⏰");
        break;
      case 5:
        showToast("Start the engines! 💥");
        break;
      case 0:
        showToast("Lift off! 🚀");
        clearInterval(timer);
        break;

      default:
        break;
    }

    timeElement.innerText = remainingTime;
  }, 1_000);

  startButton.disabled = true;
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastElement.classList.add("show");
  toastMessElement.innerText = message;

  setTimeout(closeToast, 3_000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}

function closeToast() {
  toastElement.classList.remove("show");
}
