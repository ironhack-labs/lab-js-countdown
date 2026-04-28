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
  const timeDisplay = document.getElementById("time");
  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime = remainingTime - 1;
    timeDisplay.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById('toast');
  toast.classList.add('show');

  const hideTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeButton = document.getElementById('close-toast');
  closeButton.addEventListener('click', () => {
    clearTimeout(hideTimeout);
    toast.classList.remove('show');
  });
}
