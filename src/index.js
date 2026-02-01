const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout = null; // Variable to store toast timeout

document.getElementById('start-btn').addEventListener('click', startCountdown);

// ITERATION 1: Add event listener to the start button

// Your code goes here ...


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Reset time and UI
  remainingTime = DURATION;
  document.getElementById('time').textContent = remainingTime;
  document.getElementById('start-btn').disabled = true;
  // Hide toast if visible
  hideToast();
  // Start countdown
  timer = setInterval(() => {
    remainingTime--;
    document.getElementById('time').textContent = remainingTime;
    if (remainingTime === 10) {
      showToast('⏰ Final countdown! ⏰');
    }
    if (remainingTime === 5) {
      showToast('Start the engines! 💥');
    }
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast('Lift off! 🚀');
      document.getElementById('start-btn').disabled = false;
    }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  toastMsg.textContent = message;
  toast.classList.add('show');
  // Clear any previous timeout
  if (toastTimeout) {
    clearTimeout(toastTimeout);
    toastTimeout = null;
  }
  toastTimeout = setTimeout(() => {
    hideToast();
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeBtn = document.getElementById('close-toast');
  closeBtn.onclick = function() {
    if (toastTimeout) {
      clearTimeout(toastTimeout);
      toastTimeout = null;
    }
    hideToast();
  };
}

function hideToast() {
  const toast = document.getElementById('toast');
  toast.classList.remove('show');
}


// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
