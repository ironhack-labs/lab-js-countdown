const duration = 10;
let remainingTime = duration;
let timer = null;
let timeOut = null;
let intervalId = null;
const timeDisplay = document.querySelector('#time');
const hiddenMessage = document.querySelector('#toast').classList;
const closeBtn = document.querySelector('#close-toast');
const startBtn = document.querySelector('#start-btn');

// ITERATION 1: Add event listener to the start button

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  startCountdown();
});

// ITERATION 2: Start Countdown

function startCountdown() {
  intervalId = setInterval(() => {
    remainingTime--;
    timeDisplay.innerText = remainingTime;
    // if (remainingTime === 10) {
    //   showToast('⏰ Final countdown! ⏰');
    // } else if (remainingTime === 5) {
    //   showToast('Start the engines! 💥');
    // }
    if (remainingTime === 0) {
      clearInterval(intervalId);
      showToast();
      startBtn.disabled = false;
    }
  }, 1000);
}

// showMessage.style.display = "block";

// ITERATION 3: Show Toast
function showToast(message) {
  hiddenMessage.innerText = message;
  hiddenMessage.add('show');

  timeOut = setTimeout(() => {
    hiddenMessage.remove('show');
    clearTimeout(timeOut);
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
}
closeBtn.addEventListener('click', () => {
  hiddenMessage.remove('show');

  clearTimeout(timeOut);
});
