const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton=document.getElementById('start-btn')
startButton.addEventListener('click',startCountdown)




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;


  // Set the countdown duration (10 seconds)
  let timeRemaining = 10;

  // Get reference to the time display element
  const timeDisplay = document.getElementById('time');

  // Update the initial display
  timeDisplay.innerText = timeRemaining;

  // Start the countdown timer
  const timer = setInterval(() => {
    // Decrease the remaining time by 1
    timeRemaining--;

    // Update the time display
    timeDisplay.innerText = timeRemaining;
    
    // Check if the time has run out
    if (timeRemaining <= 0) {
      // Stop the timer
      clearInterval(timer);


      // Call a function to show the toast message
      showToast();
    }
  }, 1000); // Run every 1000 milliseconds (1 second)
  if(timeRemaining<10){
  }
}

// Placeholder for showing toast message
function showToast() {
  // Implement the toast logic here
  console.log("Toast: Time's up!");
}




// ITERATION 3: Show Toast
// Function to display toast message
function showToast() {
  // Access the toast element
  const toast = document.getElementById('toast');

  // Add the "show" class to make it visible
  toast.classList.add('show');

  // Set a timeout to hide the toast after 3 seconds
  setTimeout(() => {
      // Remove the "show" class to hide the toast
      toast.classList.remove('show');
  }, 3000); // 3000 milliseconds for 3 seconds duration
}
});

