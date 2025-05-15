const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('#start-btn');
  startButton.addEventListener('click', startCountdown);
});




  // ITERATION 2: Start Countdown
  function startCountdown() {
    console.log("startCountdown called!");
    
    // Disable the start button to prevent multiple timers
    const startButton = document.querySelector('#start-btn');
    startButton.disabled = true;
    
    // Reset the countdown if it was previously run
    remainingTime = DURATION;
    
    // Clear any existing interval
    if (timer) {
      clearInterval(timer);
    }
    
    // Update the display initially
    const timeDisplay = document.querySelector('#time');
    timeDisplay.textContent = remainingTime;
    
    // Set up the interval to run every second
    timer = setInterval(() => {
      // Decrease the remaining time
      remainingTime--;
      
      // Update the display
      timeDisplay.textContent = remainingTime;
      
      // Check if countdown is complete
      if (remainingTime <= 0) {
        // Stop the interval
        clearInterval(timer);
        
        // Show the toast notification
        showToast("Lift off! 🚀");
        
        // Re-enable the start button
        startButton.disabled = false;
      }
    }, 1000); // 1000ms = 1 second
  }



  // ITERATION 3: Show Toast
  function showToast(message) {
    console.log("showToast called!");
    
    // Select the toast elements
    const toast = document.querySelector('#toast');
    const toastMessage = document.querySelector('#toast-message');
    
    // Update the message
    toastMessage.textContent = message;
    
    // Show the toast by adding the 'visible' class
    toast.classList.add('visible');
    
    // Hide the toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 3000);

  }

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  function showToast(message) {
    console.log("showToast called!");
    
    // Select the toast elements
    const toast = document.querySelector('#toast');
    const toastMessage = document.querySelector('#toast-message');
    const closeButton = document.querySelector('#close-toast');
    
    // Update the message
    toastMessage.textContent = message;
    
    // Show the toast by adding the 'visible' class
    toast.classList.add('visible');
    
    // Add click event listener to the close button
    closeButton.addEventListener('click', () => {
      toast.classList.remove('visible');
    });
    
    // Hide the toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 3000);
  }

