const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", startCountdown)


// ITERATION 2: Start Countdown
function startCountdown() {
  let remainingTime = 10;
  const timeDisplay = document.getElementById("time");
  timeDisplay.textContent = remainingTime;

  const interval = setInterval(() => {

    if (remainingTime === 0) {
      clearInterval(interval);
      showToast("Lift off! 🚀");
    } else if (remainingTime === 10){
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5){
      showToast("Start the engines! 💥");
    }
    remainingTime--;
    if(remainingTime>= 0){
      timeDisplay.textContent = remainingTime;
    }
    
  }, 1000);
}



// ITERATION 3: Show Toast
function showToast(message) {

  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

}
const closeBtn = document.getElementById("close-toast");

closeBtn.addEventListener("click", () => {
  toast.classList.remove("show");

});  



