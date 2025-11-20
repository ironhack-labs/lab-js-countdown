// DOM elements
const startBtn = document.getElementById('start-btn');
const timeEl = document.getElementById('time');
const toastEl = document.getElementById('toast');
const toastMessageEl = document.getElementById('toast-message');
const closeToastBtn = document.getElementById('close-toast');

let countdownInterval;
let toastTimeout;

// Iteration 1: Add event listener to Start button
startBtn.addEventListener('click', startCountdown);

// Iteration 2: Start countdown function
function startCountdown() {
  let remainingTime = 10;
  timeEl.textContent = remainingTime;
  startBtn.disabled = true;

  countdownInterval = setInterval(() => {
    remainingTime--;
    timeEl.textContent = remainingTime;

    // Bonus: show different messages at different times
    if (remainingTime === 10) showToast("⏰ Final countdown! ⏰");
    if (remainingTime === 5) showToast("Start the engines! 💥");

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      showToast("Lift off! 🚀");
      startBtn.disabled = false;
    }
  }, 1000);
}

// Iteration 3 + Bonus 5: Show toast function
function showToast(message) {
  // clear previous timeout if exists
  if (toastTimeout) clearTimeout(toastTimeout);

  toastMessageEl.textContent = message;
  toastEl.classList.add('show');

  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 3000);
}

// Bonus 4: Close toast button
closeToastBtn.addEventListener('click', () => {
  if (toastTimeout) clearTimeout(toastTimeout);
  toastEl.classList.remove('show');
});
