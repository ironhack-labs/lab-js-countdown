const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', () => {
  startCountdown();
  message = '⏰ Final countdown! ⏰';
  showToast(message);
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log('startCountdown called!');

  const intervalId = setInterval(() => {
    startButton.disabled = true;
    remainingTime--;
    const divTime = document.getElementById('time');
    divTime.innerText = remainingTime;

    if (remainingTime === 5) {
      message = 'Start the engines! 💥';
      showToast(message);
    } else if (remainingTime === 0) {
      clearInterval(intervalId);
      message = 'Lift off! 🚀';
      showToast(message);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log('showToast called!');

  const toastCard = document.getElementById('toast');
  toastCard.classList.add('show');
  toastCard.innerText = message;
  const timeOutId = setTimeout(() => {
    toastCard.classList.remove('show');
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const toastCloseBtn = document.getElementById('close-toast');
  toastCloseBtn.addEventListener('click', () => {
    clearTimeout(timeOutId);
    toastCard.classList.remove('show');
  });
}
