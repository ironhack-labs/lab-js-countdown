const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let toastTimeout = null; // Variable to store the toast timeout

const timeElement = document.querySelector('#time');
const startButton = document.querySelector('#start-btn');
const toast = document.querySelector('#toast');
const toastMessage = document.querySelector('#toast-message');
const closeToast = document.querySelector('#close-toast');

startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  // Reset remaining time
  remainingTime = DURATION;
  timeElement.innerText = remainingTime;

  // Disable the button during countdown
  startButton.disabled = true;

  // Bonus message at the beginning
  showToast("Final countdown!");

  // Start interval
  timer = setInterval(() => {
    // Decrease time by 1
    remainingTime--;

    // Update the tie on the page
    timeElement.innerText = remainingTime;

    //Bonus message when timer reaches 5
    if (remainingTime === 5) {
      showToast("Start the engines!");
    }

    // Stop countdown when it reaches 0
    if (remainingTime === 0) {
      clearInterval(timer);
      // timer = null;

      // Show final toast message
      showToast("Lift off!");

      // Enable the button again
      startButton.disabled = false;

    }
  }, 1000)
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  // Update the toast message
  toastMessage.innerText = message;

  // Show the toast
  toast.classList.add("show");

  // Clear previous timeout if there is one
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToast.addEventListener("click", () => {
    // Stop the timeout
    clearTimeout(toastTimeout);

    // Hide the toast immediately
    toast.classList.remove("show");
  });

