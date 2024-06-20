const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.addEventListener("click", () => {
  const startButton = document.getElementById("start-btn");
  startButton.addEventListener("click", startCountdown);
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  const timeDisplay = document.getElementById("time");
  const startButton = document.getElementById("start-btn");

  startButton.disable = true;

  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      startButton.disable = false;
      remainingTime = DURATION;
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;
  toast.classList.add("show");

  toastTimeout = setTimeout(() => {
    hideToast();
  }, 3000);
}

function hideToast() {
  const toast = document.getElementById("toast");
  toast.classList.remove("show");
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
document.addEventListener("click", () => {
  const closeButton = document.getElementById("close-toast");

  closeButton.addEventListener("click", () => {
    hideToast();
    clearTimeout(toastTimeout);
  });
});
