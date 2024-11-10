const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout = null; // Variable to store the timeout for hiding the toast


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
// Add an event listener to the start button
document.getElementById('start-btn').addEventListener('click', startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  // Disable the start button to prevent multiple clicks
  document.getElementById('start-btn').disabled = true;

  // Display the initial countdown value
  document.getElementById('time').textContent = remainingTime;

  // Show the initial message at the start of the countdown
  showToast("⏰ Final countdown! ⏰");

  // Start the countdown interval
  timer = setInterval(() => {
    remainingTime--;

    // Update the time display
    document.getElementById('time').textContent = remainingTime;

    // Show different messages based on the remaining time
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    // Check if time is up
    if (remainingTime <= 0) {
      clearInterval(timer); // Stop the timer
      showToast("Lift off! 🚀"); // Show the toast notification
      resetCountdown(); // Reset the countdown and re-enable the start button
    }
  }, 1000); // Runs every 1 second (1000 milliseconds)
}

// Function to reset the countdown and re-enable the start button
function resetCountdown() {
  remainingTime = DURATION;
  document.getElementById('start-btn').disabled = false;
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  // Select the toast element
  const toast = document.getElementById('toast');

  // Set the message in the toast element
  document.getElementById('toast-message').textContent = message;

  // Add the 'show' class to display the toast
  toast.classList.add('show');

  // Clear any previous toast timeout (if any)
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  // Set a timeout to automatically remove the 'show' class after 3 seconds
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000); // Hide after 3 seconds (3000 milliseconds)
}


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  // Add event listener for the close button
  document.getElementById('close-toast').addEventListener('click', () => {
    // Clear the timeout to prevent the toast from automatically hiding after 5 seconds
    clearTimeout(toastTimeout);

    // Remove the 'show' class to hide the toast immediately
    document.getElementById('toast').classList.remove('show');
});


  


