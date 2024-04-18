const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', function() {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true; // Disable the start button during countdown

  timer = setInterval(function() {
    remainingTime--;
    document.getElementById('time').innerText = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toastMessage = document.getElementById('toast-message');
  toastMessage.innerText = message; // Update the toast message
  
  const toastElement = document.getElementById('toast');
  toastElement.classList.add('show'); // Show the toast card
  
  setTimeout(function() {
    toastElement.classList.remove('show'); // Hide the toast card after 3 seconds
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
const closeButton = document.getElementById('close-toast');
closeButton.addEventListener('click', function() {
  clearTimeout(timer); // Clear the countdown timer
  document.getElementById('toast').classList.remove('show'); // Hide the toast card
});