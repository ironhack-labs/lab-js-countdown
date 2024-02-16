const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timeContainer = document.getElementById("time");
const toastModal = document.getElementById("toast");
const closeToast = document.getElementById("close-toast");
const toastMsg = document.getElementById("toast-message");
const startBtn = document.getElementById("start-btn");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtn.addEventListener("click", startCountdown);
closeToast.addEventListener("click", closeToastModal);

// ITERATION 2: Start Countdown
// Your code goes here ...

function startCountdown() {
  remainingTime = DURATION;
  timeContainer.innerText = `${remainingTime}`;
  timer = setInterval(() => {
    remainingTime--;
    timeContainer.innerText = `${remainingTime}`;
    startBtn.disabled = true;
    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime <= 0) {
      startBtn.disabled = false;
      showToast("Lift off! 🚀");
      clearInterval(timer);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  toastModal.classList.add("show");
  toastMsg.textContent = message;
  // Your code goes here ...

  let timeout = setTimeout(() => {
    toastModal.classList.remove("show");

    if (remainingTime === 0) {
      clearTimeout(timeout);
    }
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...

function closeToastModal() {
  toastModal.classList.remove("show")
}
