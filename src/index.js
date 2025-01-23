const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.onclick = startCountdown;
// startButton.addEventListener("Click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  let timeRemaining = 10;
  const startButton = document.getElementById("start-btn");
  startButton.disabled = true;
  const timeElement = document.getElementById("time");
  const intervalId = setInterval(function() {
    timeRemaining = timeRemaining -1;
    timeElement.textContent = timeRemaining;
    if (timeRemaining === 0) {
      clearInterval(intervalId);
      showToast();
      startButton.disabled = false;
  }
}, 1000);
}
        








// ITERATION 3: Show Toast
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(function () {
      toast.classList.remove("show");
  }, 3000);
}
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
