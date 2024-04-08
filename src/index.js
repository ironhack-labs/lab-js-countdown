const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const toast = document.getElementById("toast");
const closeButton = document.getElementById("close-toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  timer = setInterval(function () {
    startCountdown();
  }, 1000);
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  const time = document.getElementById("time");
  startButton.disabled = true;
  time.innerHTML = remainingTime;

  if (remainingTime > 0) {
    remainingTime--;
  } else {
    clearInterval(timer);
    showToast();
  }
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  message = toast.classList.add("show");

  timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeButton.addEventListener("click", function () {
    clearTimeout(timeout);
    toast.classList.remove("show");
  });
}
