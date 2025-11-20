const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const count = document.getElementById("start-btn")

count.addEventListener("click", startCountdown)




// ITERATION 2: Start Countdown
function startCountdown() {

  let timeRemaining = 10;

  const timeDisplay = document.getElementById("time")

  timeDisplay.innerText = timeRemaining

  const countdownTimer = setInterval(() => {

    timeRemaining--;

    timeDisplay.innerText = timeRemaining

    if (timeRemaining === 0) {
      clearInterval(countdownTimer);
      showToast()
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  
  const toastElement = document.getElementById("toast")

  toastElement.classList.add("show")

  setTimeout(()=>{
    toastElement.classList.remove("show")
  },3000)

  




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
