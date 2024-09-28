const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
document.getElementById('start-btn').addEventListener('click', startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Disable the start button to prevent multiple clicks
  const startButton = document.getElementById('start-btn');
  startButton.disabled = true;

  // Reset the remaining time to the original DURATION
  remainingTime = DURATION;

  // Update the UI to show the initial remaining time
  const timeElement = document.getElementById('time');
  timeElement.textContent = remainingTime;

  // Clear any existing timers
  clearInterval(timer);

  // Start the countdown
  timer = setInterval(() => {
    remainingTime -= 1;
    timeElement.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);  // Stop the countdown
      showToast("Lift off! 🚀");  // Call showToast when countdown finishes
      startButton.disabled = false;  // Re-enable the start button
    }
  }, 1000);  // Set interval to 1 second (1000 milliseconds)
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Get the toast element and the message element inside it
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  // Set the message text
  toastMessage.textContent = message;

  // Show the toast by adding the 'show' class
  toast.classList.add('show');

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeToast = document.getElementById('close-toast');
  closeToast.addEventListener('click', () => {
    toast.classList.remove('show');  // Hide the toast when close button is clicked
  });
}
