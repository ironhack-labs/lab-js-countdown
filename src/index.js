const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtn = document.getElementById('start-btn')
const time = document.getElementById('time')
const toastElement = document.getElementById('toast')
const closeToastBtn = document.getElementById('close-toast')
const toastMessages = document.getElementById('toast-message')

// ITERATION 1: Add event listener to the start button
startBtn.addEventListener("click", () => {
  startCountdown();
});

closeToastBtn.addEventListener("click", () => {
  toastElement.classList.remove('show')
  time.innerText = remainingTime;
});

// ITERATION 2: Start Countdown
function startCountdown() {
startBtn.style.display = "none";
timer = setInterval(() => {  
  remainingTime -= 1; 
  time.innerText = remainingTime;
  if(remainingTime === DURATION -1) {
    showToast("⏰ Final countdown! ⏰")
  } else if (remainingTime === 5) {
    showToast("Start the engines! 💥")
  }
  else if (remainingTime === 0) {
    clearInterval(timer)
    showToast()
    startBtn.style.display = "block";
    remainingTime = DURATION;
    time.innerText = remainingTime;
  }

}, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
   toastMessages.innerText = message || "Lift off! 🚀" 
   toastElement.classList.add('show')
setTimeout(() => {
   toastElement.classList.remove('show')
}, 3000)
}

