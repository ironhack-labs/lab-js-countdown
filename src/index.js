// const DURATION = 10; // 10 seconds
let counter = 10;
let remainingTime = counter; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButton = document.querySelector("#start-btn");
const closetoast = document.querySelector("#close-toast");
const toastMessage = document.querySelector("#toast-message");
const timerElement = document.querySelector("#time");
const toast = document.querySelector(".toast");
let toastTimeout = null;

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    timerElement.innerText = remainingTime;

    if (remainingTime === counter - 1) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime <= 0) {
      // timerElement.innerText = remainingTime;
      showToast("Lift off! 🚀");
      clearInterval(timer);
      setTimeout(() => {
        timerElement.innerText = counter;
        startButton.disabled = false;
      }, 3000);
    }
  }, 1000);
}

// ITERATION 3: Show Toast

// Your code goes here ...
function showToast(message) {
  toastMessage.innerText = message;
  toast.classList.add("show");
  toastTimeout = setTimeout(() => {
    console.log("execution");
    toast.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
closetoast.addEventListener("click", () => {
  toast.classList.remove("show");
  clearTimeout(toastTimeout);
});
