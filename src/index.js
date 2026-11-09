const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout = null;

const time = document.getElementById("time");
const toast = document.getElementById("toast");
const closeToastBtn = document.getElementById("close-toast");
const toastMessage = document.getElementById("toast-message");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  startButton.disabled = true;

  showToast("⏰ Final countdown! ⏰");

  timer = setInterval(() => {
    console.log("tick");
    remainingTime--;
    time.textContent = remainingTime;

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift Off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastMessage.textContent = message;

  clearTimeout(toastTimeout);

  toast.classList.add("show");

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}

closeToastBtn.addEventListener("click", () => {
  toast.classList.remove("show");
  clearTimeout(toastTimeout);
});
