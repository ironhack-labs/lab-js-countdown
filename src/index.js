

const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


const startButton = document.getElementById("start-btn");
const timeDisplay = document.getElementById("time");
const toastElement = document.getElementById("toast");
function updateDisplay() {
  timeDisplay.textContent = remainingTime;
}

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButton.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

 
  startButton.disabled = true;

 
  clearInterval(timer);


  updateDisplay();

  timer = setInterval(function () {
    remainingTime--;

    if (remainingTime <0 ) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    } else {
      updateDisplay();
    }
  }, 1000); 
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toastMessageElement = document.getElementById("toast-message");
  toastMessageElement.textContent = message;

  toastElement.classList.add("show");
  setTimeout(function () {
    toastElement.classList.remove("show");
    startButton.disabled = false;
    remainingTime = DURATION;
    updateDisplay();
  }, toastTimeout);
}

// Bonus: Close the toast on click
document.getElementById("close-toast").addEventListener("click", function () {
 
  clearTimeout(timeoutId);

  toastElement.classList.remove("show");
});








