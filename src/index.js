const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.getElementById("start-btn").addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown

function startCountdown() {
  // Disable the start button
  document.getElementById("start-btn").disabled = true;

  // Interval function to decrease time
  timer = setInterval(function() {
    remainingTime -= 1; // Decrease time by 1 second
    document.getElementById("time").innerText = remainingTime; // Update the display

    if (remainingTime <= 0) {
      clearInterval(timer); // Stop the timer
      showToast("Countdown Complete!"); // Call showToast function with custom message
      document.getElementById("start-btn").disabled = false; // Re-enable the start button
    }
  }, 1000); // Run every 1000 milliseconds (1 second)
}

// Existing code for event listener
document.getElementById("start-btn").addEventListener("click", startCountdown);
  
// ITERATION 3: Show Toast
function showToast(message) {
  // Get the toast element and the toast message element
  const toast = document.getElementById("toast");
 
  // Add the 'show' class to make the toast visible
  toast.classList.add("show");

  // Set a timeout to remove the 'show' class after 3 seconds (3000 milliseconds)
  setTimeout(function() {
    toast.classList.remove("show");
  }, 3000);
}

  


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  let toastTimeout; // Global variable to store the toast timeout


  document.getElementById("close-toast").addEventListener("click", function() {
    // Clear the timeout
    clearTimeout(toastTimeout);
  
    // Hide the toast card
    const toast = document.getElementById("toast");
    toast.classList.remove("show");
  });