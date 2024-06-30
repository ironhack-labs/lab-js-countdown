const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let interval = null; // Variable to store the interval
let toastTimeout = null; // Variable to store the toast timeout

// HTML elements
const startBtn = document.getElementById("start-btn");
const divTime = document.getElementById("time");
const divToast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const closeToast = document.getElementById("close-toast");

// ITERATION 1: Add event listener to the start button
startBtn.addEventListener("click", startCountdown);
closeToast.addEventListener("click", closeToastHandler);

function startCountdown() {
  startBtn.style.backgroundColor = "darkgray";
  startBtn.removeEventListener("click", startCountdown);
  interval = setInterval(() => {
    remainingTime--;
    divTime.innerText = remainingTime;

    // Show different messages based on the remaining time
    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      clearInterval(interval);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3 & BONUS: Show Toast with different messages
function showToast(message) {
  console.log("showToast called!");
  toastMessage.innerText = message; // Set the toast message
  divToast.classList.add("show");

  // Clear previous timeout if any
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    closeToastHandler();
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
function closeToastHandler() {
  divToast.classList.remove("show");
  clearTimeout(toastTimeout); // Clear the timeout when closing manually

  // Only reset if the timer has reached 0, else just close the toast
  if (remainingTime === 0) {
    remainingTime = DURATION;
    divTime.innerText = remainingTime;
    startBtn.style.backgroundColor = "";
    startBtn.addEventListener("click", startCountdown);
  }
}
