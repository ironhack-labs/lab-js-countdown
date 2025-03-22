const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const toastDiv = document.getElementById('toast');
const closeToastButton = document.getElementById('close-toast');
const toastMessage = document.getElementById('toast-message');

const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startCountdown);

const timeCounter = document.getElementById('time');
console.log(timeCounter);

// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true;
  showToast('Final countdown!');
  const timeDecrease = setInterval(() => {
    remainingTime--;
    timeCounter.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timeDecrease);
      showToast('Lift off!');
    } else if (remainingTime === 5) {
      showToast('Start the engines!');
    }
  }, 1000);
  console.log('startCountdown called!');
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log('showToast called!');

  toastMessage.innerText = message;
  let toastListClass = toastDiv.classList;

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  toastListClass.add('show');
  const timeToastShow = setTimeout(() => {
    toastListClass.remove('show');
  }, 3000);

  closeToastButton.style.cursor = 'pointer';

  closeToastButton.addEventListener('click', () => {
    toastDiv.classList.remove('show');
  });
}
