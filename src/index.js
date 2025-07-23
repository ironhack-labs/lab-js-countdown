const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startCountdown);





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
}
let countdownInterval;

function startCountdown() {
  let timeLeft = 10;
  const timeDisplay = document.getElementById("time");
  timeDisplay.textContent = timeLeft;


  startButton.disabled = true;

  countdownInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    // (Iteration 5)
    if (timeLeft === 10) showToast("⏰ Final countdown! ⏰");
    if (timeLeft === 5) showToast("Start the engines! 💥");

    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      showToast("Lift off! 🚀");
      startButton.disabled = false;
    }
  }, 1000);
}





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

let toastTimeout;

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;
  toast.classList.add("show");

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
const closeToastBtn = document.getElementById("close-toast");

closeToastBtn.addEventListener("click", () => {
  clearTimeout(toastTimeout);
  document.getElementById("toast").classList.remove("show");
});

