const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Update the countdown display initially
  document.getElementById('time').innerText = remainingTime;

  // Start the countdown timer
  timer = setInterval(() => {
    remainingTime--;
    document.getElementById('time').innerText = remainingTime;

    // Check if countdown is finished
    if (remainingTime === 0) {
      clearInterval(timer); // Stop the countdown timer
      showToast("Lift off! 🚀"); // Show the toast
    }
  }, 1000); // Update every second
};




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Show the toast
  const toast = document.getElementById('toast');
  toast.classList.add('show');

  // Set the toast message
  document.getElementById('toast-message').innerText = message;
}





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  document.getElementById('close-toast').addEventListener('click', () => {
    const toast = document.getElementById('toast');
    toast.classList.remove('show'); // Hide the toast
  });

