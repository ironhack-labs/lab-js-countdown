const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn")
const toast = document.getElementById("toast")
const closetoast = document.getElementById("close-toast")
const closeMessage = document.getElementById("toast-message")

startButton.addEventListener("click", ()=>{
  startCountdown()
} )


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const timerElement = document.getElementById("time")

  let timer = 10;

  const intervalId = setInterval(() => {
    timer -= 1;
    if (timer >=0) {
      startButton.disabled = true;
      timerElement.innerText = timer;
      if (timer === 9){
        showToast("⏰ Final countdown! ⏰")
      }
      else if (timer === 5){  
        showToast("Start the engines! 💥")
      }
    } else {
      showToast("Lift off! 🚀")
      startButton.disabled = false;
      clearInterval(intervalId);
    }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  closeMessage.innerText = message
  toast.classList.add("show")
  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000);
}

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closetoast.addEventListener("click", ()=>{
    closetoast.classList.remove("show")
    clearInterval(11);
    startCountdown();
  })
