const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.getElementById("start-btn").addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  let remainingTime = 10; // initial countdown time
  const timeDisplay = document.getElementById("time");
  const startButton = document.getElementById("start-btn");
  startButton.disabled = true; // start button disable

  startButton.disabled = true;
  timeDisplay.textContent = remainingTime;

  const countdownInterval = setInterval(() => {
    if (remainingTime === 10) {
      showToast("Final countdown!");
    } else if (remainingTime === 5) {
      // the text start the engines is suppose to be display but I have Lift off instead
      showToast("Start the engines!");
    }

    remainingTime--;
    timeDisplay.textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      startButton.disabled = false;
      showToast("Lift off!");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  // Your code goes here ...
  console.log(message);
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// I had the code directly in the function startCountdown + countdownInterval but it is not working. Can I have a IA feedback about this question. Thank you!
