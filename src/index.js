const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButtonElement = document.getElementById("start-btn");
const timeElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const closeToastElement = document.getElementById("close-toast");
const toastMessageElement = document.getElementById("toast-message");

startButtonElement.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  timer = setInterval(() => {
    timeElement.textContent = remainingTime;

    if (remainingTime === 10) {
      showToast();
    }
    if (remainingTime === 5) {
      showToast();
    }
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
    }
    remainingTime--;
    startButtonElement.disabled = true;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastElement.classList.add("show");

  if (remainingTime === 10) {
    toastMessageElement.textContent = `⏰ Final countdown! ⏰`;
  } else if (remainingTime === 5) {
    toastMessageElement.textContent = `Start the engines! 💥`;
  } else if (remainingTime === 0) {
    toastMessageElement.textContent = `Lift off! 🚀`;
  }

  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToastElement.addEventListener("click", () => {
    toastElement.classList.remove("show");
  });
}
