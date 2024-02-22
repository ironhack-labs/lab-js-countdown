const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startBtn = document.getElementById("start-btn");
const timeLabel = document.getElementById("time");
// Your code goes here ...
startBtn.addEventListener("click", function (e) {
  startBtn.disabled = true;
  timer = setInterval(() => {
    startCountdown();
  }, 1000);
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timeLabel.innerText = remainingTime;
  console.log(remainingTime);
  if (remainingTime === 0) {
    clearInterval(timer);
    startBtn.disabled = false;
    showToast(" Lift off! 🚀");
  }
  remainingTime--;
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toastElement = document.querySelector("#toast");
  const toastMessage = document.querySelector("#toast-message");

  toastElement.classList.add("show");
  toastMessage.textContent = message;

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
