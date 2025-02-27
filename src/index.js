const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timerElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const startBtn = document.getElementById('start-btn');
const closeBtn = document.getElementById('close-toast');
let toastTimeout = null;

// ITERATION 1: Add event listener to the start button
startBtn.addEventListener ('click', () => {
  startCountdown();
})

// ITERATION 2: Start Countdown
function startCountdown() {
  startBtn.disabled = true;
    timer = setInterval(() => {
      remainingTime--;
      timerElement.innerText = remainingTime;
      if (remainingTime === 0) {  
        clearInterval(timer);
        showToast('Time is up');
    }
  }, 1000);
};

// ITERATION 3: Show Toast
function showToast(message) {
  toastElement.innerText = message;
  toastElement.classList.add('show');

setTimeout(() => {
  toastElement.classList.remove('show'); // Hide after 3s
}, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
toastElement.addEventListener ('click', () => {
  closeBtn.classList.remove('show');
  clearTimeout(showToast);
});

