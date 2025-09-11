const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout;
const startBtnElement = document.querySelector("#start-btn");
const timeElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const closeToastBtn = document.getElementById("close-toast");
const toastMessageElement = document.getElementById("toast-message");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.getElementById("start-btn").addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  clearInterval(timer);
  remainingTime = DURATION;
  startBtnElement.disabled = true;
  timeElement.textContent = remainingTime;
  timer = setInterval(() => {
    remainingTime--;
    timeElement.textContent = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(timer);

      showToast("Lift off! 🚀");
      startBtnElement.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastMessageElement.textContent = message;
  toastElement.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToastBtn.addEventListener("click", () => {
    toastElement.classList.remove("show");
    clearTimeout(toastTimeout);
  });
}
