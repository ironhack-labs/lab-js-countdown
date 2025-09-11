const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startButtonElement = document.getElementById("start-btn");
const countingDownElement = document.getElementById("time");
const ToastElement = document.getElementById("toast");
const clostToastElement = document.getElementById("close-toast");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButtonElement.addEventListener("click", () => {
  startCountdown();
});

clostToastElement.addEventListener("click", () => {
  clostToastFun();
});
// ITERATION 2: Start Countdown

function startCountdown() {
  showToast("⏰ Final countdown! ⏰");
  console.log("startCountdown called!");
  timer = setInterval(() => {
    console.log(remainingTime);
    remainingTime--;

    if (remainingTime == 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime < 1) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
    countingDownElement.innerText = remainingTime;
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  ToastElement.classList.add("show");
  ToastElement.innerText = message;
  setTimeout(() => {
    ToastElement.classList.remove("show");
  }, 3000);
}

// Your code goes here ...

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
function clostToastFun() {
  ToastElement.classList.remove("show");
}

// Your code goes here ...
