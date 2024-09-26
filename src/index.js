const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startButton = document.querySelector("#start-btn")
const timeDisplay = document.querySelector('#time');

const toast = document.querySelector('#toast');
const toastMessage = document.querySelector('#toast-message');

const closeToastButton = document.querySelector('#close-toast');

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButton.addEventListener('click', startCountdown);
// Function to start the countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Reset the remaining time to DURATION
  remainingTime = DURATION;
  // Display the initial time
  timeDisplay.innerText = remainingTime;

  // Clear any previous timer to prevent overlapping intervals
  if (timer) {
    clearInterval(timer);
  }

  // Start the countdown interval
  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.innerText = remainingTime;

    // Check if the countdown has finished
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// const intervalId = setInterval(function () {
//   if (DURATION> 0) {
//     console.log(DURATION);
//   } else {
//     console.log('Pop!');
//     clearInterval(intervalId);
//   }

//   DURATION--;
// }, 1000);



// ITERATION 2: Start Countdown
// function startCountdown() {
//   console.log("startCountdown called!");


  // Your code goes here ...

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toast.classList.add('show');
  // Your code goes here ...
  toastMessage.innerText = message;

  setTimeout(() => {
    toast.classList.remove('show')
  }, 3000); // Hides after 3 seconds

}
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToastButton.addEventListener('click', () => {
    toast.style.display = 'none';
  });
