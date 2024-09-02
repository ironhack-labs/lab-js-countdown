const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeOutTimer = null;
const timeElement = document.querySelector("#time");
const toastElement = document.querySelector("#toast");
const closeBtn = document.getElementById("close-toast");
const toastMessageElement = document.getElementById("toast-message");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});
closeBtn.addEventListener("click", () => {
  console.log("this is the x button");
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(timer);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add("show");
  toastMessageElement.innerText = message;

  timeOutTimer = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 1000);

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
}
