const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  startButton.disabled = true;

  timer = setInterval(function () {
    remainingTime--;
    document.getElementById("time").innerText = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");

      remainingTime = DURATION;

      startButton.disabled = false;
    }
  }, 1000); // Update every second
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastElement = document.getElementById("toast");
  toastElement.classList.add("show");

  const toastMessageElement = document.getElementById("toast-message");
  toastMessageElement.innerText = message;

  setTimeout(function () {
    hideToast();
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...

document.getElementById("close-toast").addEventListener("click", function () {
  hideToast();
});

function hideToast() {
  const toastElement = document.getElementById("toast");
  toastElement.classList.remove("show");
}
