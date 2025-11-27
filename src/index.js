const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtnElement = document.getElementById("start-btn");
const counterElement = document.getElementById("time");
const toastDivElement = document.getElementById("toast");
const toastDivClass = document.getElementsByClassName("toast");
const toastMessageElement = document.getElementById("toast-message");
const closeToastElement = document.getElementById("close-toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtnElement.addEventListener("click", () => {
  startCountdown();
  document.getElementById("start-btn").disabled = true;
});

// ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...
  timer = setInterval(() => {
    remainingTime--;
    counterElement.innerText = remainingTime;
    console.log("startCountdown called!", timer);
    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      clearInterval(timer);
      document.getElementById("start-btn").disabled = false;
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...

  toastMessageElement.innerText = message;
  toastDivElement.classList.add("show");
  setTimeout(() => {
    toastDivElement.classList.remove("show");
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  toastDivElement.addEventListener("click", () => {
    toastDivElement.classList.remove("show");
  });
}
