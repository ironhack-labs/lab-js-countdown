const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);


function startCountdown() {
 
  startButton.disabled = true;

  
  if (timer !== null) {
    clearInterval(timer); 
  }

  
  timer = setInterval(function () {
    
    remainingTime--;

   
    updateCountdownDisplay();

    
    if (remainingTime === 0) {
      clearInterval(timer); 
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

function updateCountdownDisplay() {
  const timeElement = document.getElementById("time");
  timeElement.textContent = remainingTime;
}




// ITERATION 3: Show Toast
function showToast(message) {
  const toastElement = document.getElementById("toast");
  toastElement.classList.add("show");
  toastElement.textContent = message;

  setTimeout(function () {
    toastElement.classList.remove("show");
    startButton.disabled = false;
  }, 3000);
}
