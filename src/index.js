const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const countdown = document.querySelector("#time")
const startButton = document.querySelector("#start-btn")
const toastSelector = document.querySelector("#toast")
const toastMessage = document.querySelector("#toast-message")
// ITERATION 1: Add event listener to the start button


startButton.onclick = () => {
  startCountdown()
}

// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true
  showToast("Final Countdown! ⏰")
  timer = setInterval(() => {
    if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }
    if (remainingTime === 0) {
      clearInterval(timer)
      showToast("Lift off! 🚀")
      startButton.disabled = false
      const timeOutToast = setTimeout(() => {
        toastSelector.classList.remove("show")
      }, 3000)
      return
    }
    remainingTime--
    countdown.innerText = remainingTime
  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  toastSelector.classList.add("show")
  toastMessage.innerHTML = `${message}`
  console.log(message)
}



// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...


