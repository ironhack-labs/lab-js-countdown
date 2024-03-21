const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
// Get the start button element
const startButton = document.getElementById('start-button');

// Add click event listener to the start button
startButton.addEventListener('click', startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  function startCountdown() {
    // Disable the start button to prevent multiple countdowns
    startButton.disabled = true;

    let remainingTime = 10; // Initial remaining time in seconds

    // Update the time display initially
    updateTimeDisplay(remainingTime);

    // Start the countdown timer
    const countdownInterval = setInterval(() => {
        remainingTime--; // Decrease remaining time by 1 second

        // Update the time display
        updateTimeDisplay(remainingTime);

        // Check if remaining time has reached 0
        if (remainingTime === 0) {
            // Stop the countdown timer
            clearInterval(countdownInterval);

            // Call the showToast function to display a message
            showToast();

            // Enable the start button after countdown finishes
            startButton.disabled = false;
        }
    }, 1000); // Run the interval every 1000 milliseconds (1 second)
}

// Function to update the time display
function updateTimeDisplay(remainingTime) {
    const timeDisplay = document.getElementById('time');
    timeDisplay.textContent = remainingTime; // Update the time display
}

// Function to display a toast message
function showToast() {
    // Implement this function in the next iteration
}

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  function showToast() {
    const toast = document.getElementById('toast'); // Get the toast card element
    toast.classList.add('show'); // Show the toast card by adding the "show" class

    // Set a timeout to hide the toast card after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show'); // Hide the toast card by removing the "show" class
    }, 3000); // 3000 milliseconds = 3 seconds
}

}
