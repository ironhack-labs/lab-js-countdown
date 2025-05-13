const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");
const timeDisplay = document.getElementById("time");
const toast = document.getElementById("toast");
const closeToast = document.getElementById("close-toast");

 startBtn.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let timeRemaining = parseInt(timeDisplay.textContent, 10);

  countdownInterval = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      timeDisplay.textContent = timeRemaining;
    } else {
      clearInterval(countdownInterval);
      showToast("Lift off! 🚀");
      console.log("Countdown finished!");
    }
  }, 1000);
}

startBtn.addEventListener("click", startCountdown);




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  
  toast.classList.add("show"); 
  setTimeout(() => {
    toast.classList.remove("show"); 
  }, 3000);
}

startBtn.addEventListener("click", startCountdown);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  closeToast.addEventListener("click", () => {
    toast.style.display = "none";
  });
