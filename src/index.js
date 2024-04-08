const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


// ITERATION 1: Add event listener to the start button

// Your code goes here ...

// Get the start button element
const startButton = document.getElementById('start-btn');

// Function to start the countdown
function startCountdown() {
  // Your existing startCountdown logic goes here
  console.log('Countdown started!');
}

// Add click event listener to the start button
startButton.addEventListener('click', startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  let remainingTime = 10; // Initial remaining time in seconds

  // Update the div#time element with the initial remaining time
  document.getElementById('time').textContent = remainingTime;

  // Disable the start button during the countdown
  startButton.disabled = true;

  // Start the countdown timer
  const countdownInterval = setInterval(() => {
    // Decrease the remaining time by 1
    remainingTime--;

    // Update the div#time element to display the remaining time
    document.getElementById('time').textContent = remainingTime;

    // Check if remaining time is 0
    if (remainingTime === 0) {
      // Stop the countdown timer
      clearInterval(countdownInterval);

      // Call showToast() function to display toast message
      showToast();

      // Enable the start button after countdown ends
      startButton.disabled = false;
    }
  }, 1000); // Interval of 1 second (1000 milliseconds)
}


// ITERATION 3: Show Toast
function showToast() {
  // Get the toast card element
  const toastElement = document.getElementById('toast');

  // Show the toast card by adding the "show" class
  toastElement.classList.add('show');

  // Set a timeout to hide the toast card after 3 seconds
  setTimeout(() => {
    // Remove the "show" class to hide the toast card
    toastElement.classList.remove('show');
  }, 3000); // Timeout of 3 seconds (3000 milliseconds)
}

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  


