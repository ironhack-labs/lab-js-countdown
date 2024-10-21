const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
let timeLeft = 10
const timerDisplay = document.getElementById("time");

const countdownInterval = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    startBtn.disabled = false;
    showToast()
  }
}, 1000)
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
const showToast = document.getElementById("toast");
showToast.classList.add("show");

setTimeout(() => {
  showToast.classList.remove("show");
}, 3000)



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ..
  
  if (timeLeft === 10) {
    showToast("⏰ Final countdown! ⏰");
  } else if(timeLeft === 5) {
    showToast("Start the engines! 💥");
  } else {
    showToast ("Lift off! 🚀")
  }

}