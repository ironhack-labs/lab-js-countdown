// Set the duration of the countdown timer in seconds
const DURATION = 10;
// Initialize the remaining time to the duration
let remainingTime = DURATION;
// Variable to store the interval ID
let timer = null;

// Get the start button element
const startButton = document.getElementById("start-btn");
// Add a click event listener to the start button
startButton.addEventListener("click", startCountdown);

// Function to start the countdown timer
function startCountdown() {
  // Disable the start button to prevent multiple clicks
  startButton.disabled = true;

  // Set up an interval that runs every second
  timer = setInterval(() => {
    // Decrease the remaining time by 1 second
    remainingTime--;
    // Update the displayed time on the page
    document.getElementById("time").innerText = remainingTime;

    // Check if the countdown has reached 0
    if (remainingTime === 0) {
      // Stop the interval
      clearInterval(timer);
      // Display the toast message
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// Function to show a toast message
function showToast(message) {
  // Add the 'show' class to make the toast visible
  document.getElementById("toast").classList.add("show");
  // Set the message content
  document.getElementById("toast-message").innerText = message;
}

// Bonus: Close button for the toast
const closeButton = document.getElementById("close-toast");
// Add a click event listener to the close button
closeButton.addEventListener("click", () => {
  // Remove the 'show' class to hide the toast
  document.getElementById("toast").classList.remove("show");
});
