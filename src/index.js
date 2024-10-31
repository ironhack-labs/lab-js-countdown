const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
// const startBtn = document.querySelector('#start-btn');
const startBtn = document.querySelector('#start-btn');
let time = document.querySelector('#time');
let toastElement = document.querySelector('div#toast');
let closeToast = document.querySelector('#close-toast');
const toastMsg = document.getElementById('toast-message');

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtn.addEventListener('click', () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {

  startBtn.disabled = true;
  let timer = setInterval(() => {
    time.textContent = remainingTime;
if (remainingTime === 0) {
  clearInterval(timer);
  showToast(' Lift off! 🚀');
}

// BONUS: ITERATION 5: More Toasts
if (remainingTime === 10) {
  showToast('⏰ Final countdown! ⏰');
}

if (remainingTime === 5) {
  showToast('Start the engines! 💥');
}
    remainingTime--;
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  toastElement.classList.add("show")
  toastMsg.textContent = message

  console.log('showToast called!');
  let removeToast = setTimeout(() => {
    toastElement.classList.remove('show');
  }, 3000);
  // Your code goes here ...
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
closeToast.addEventListener('click', () => {
  toastElement.classList.remove('show');
  clearTimeout(removeToast)
});
// Your code goes here ...
