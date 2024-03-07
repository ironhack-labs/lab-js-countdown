const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
const timeShow = document.getElementById("time");
const toastShow = document.getElementById("toast");
const toastClose = document.getElementById("close-toast");
const toastMessage = document.getElementById("toast-message");

startButton.addEventListener("click", startCountdown);
toastClose.addEventListener("click", closeToast);
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;
  // Your code goes here ...
  timer = setInterval(() => {
    remainingTime--;
    console.log(remainingTime);
    timeShow.textContent = remainingTime;
    if (remainingTime == 0) {
      clearInterval(timer);
      console.log("testfinal");
      showToast("Lift off! 🚀");
    }
  }, 200);
}
if (remainingTime === 9) {
  showToast("⏰ Final countdown! ⏰");
} else if (remainingTime === 5) {
  showToast("Start the engines! 💥");
}
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastMessage.textContent = message;
  toastShow.classList.add("show");
  setTimeout(() => {
    closeToast();
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
function closeToast() {
  toastShow.classList.remove("show");
}
