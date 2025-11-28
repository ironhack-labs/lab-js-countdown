const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
const countdownDisplay = document.getElementById("time");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const closeButton = document.getElementById("close-toast");

startButton.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  

  // Your code goes here ...
  // Reset remaining time
  remainingTime = DURATION;
  countdownDisplay.textContent = remainingTime;

  // Show toast when countdown starts
  showToast("⏰ Final countdown! ⏰");
  // disable start button to prevent multiple clicks
  startButton.disabled = true;

  // Clear any existing timer
  if (timer) {
    clearInterval(timer);
  }

  // Start a new timer
  timer = setInterval(() => {

    remainingTime--;
    countdownDisplay.textContent = remainingTime;
    
    // Show toast at 5 seconds remaining
    if(remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    
    // When countdown reaches zero
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      
      
      setTimeout(() => {
        // re-enable start button after countdown ends
        startButton.disabled = false;
        countdownDisplay.textContent = DURATION;
      }, 3000);
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastMessage.textContent = message;
  toast.classList.add("show");

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeButton.addEventListener("click", () => {
    toast.classList.remove("show");
  });
}
