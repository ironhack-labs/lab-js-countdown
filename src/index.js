const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let letTimeout = null;

//DOM Manipulation
const startCountdownBtn = document.getElementById("start-btn");
const timeElement = document.getElementById("time");
const toastCardElement = document.getElementById("toast");
const closeToastElement = document.getElementById("close-toast");
const toastMessageElement = document.getElementById("toast-message");

// ITERATION 1: Add event listener to the start button
startCountdownBtn.addEventListener("click", () => {
  startCountdown();
  remainingTime = 10;
  timeElement.innerText = remainingTime;
})

closeToastElement.addEventListener("click", () => {
  clearTimeout(letTimeout)
  toastCardElement.classList.remove("show");
})

// ITERATION 2: Start Countdown
function startCountdown() {
  //console.log("startCountdown called!");

  timer = setInterval(() => {
    if(remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰") 
      
    } else if(remainingTime === 5) {
      showToast("Start the engines! 💥") 
    
    } else if(remainingTime === 0) {
      showToast("Lift off! 🚀") 
      clearInterval(timer);
      startCountdownBtn.disabled = false;
      return;
    }

    remainingTime--;
    timeElement.innerText = remainingTime;
    startCountdownBtn.disabled = true;
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  toastCardElement.classList.add("show");

  toastMessageElement.innerText = `${message}`;

  letTimeout = setTimeout(() => {
    toastCardElement.classList.remove("show");
  }, 3000);
}
