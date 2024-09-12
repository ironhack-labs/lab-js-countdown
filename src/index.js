const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timeRemainingContainer = document.getElementById("time");


// ITERATION 1: Add event listener to the start button

let startButton = document.querySelector("#start-btn")

startButton.onclick = () => {
  startCountdown()
}



// ITERATION 2: Start Countdown
function startCountdown() {
  const timer = setInterval(() => {
    timeRemainingContainer.innerText = remainingTime
    remainingTime--

    document.querySelector("#start-btn").disabled = true

    if (remainingTime <= 10) {
      showToast("⏰ Final countdown! ⏰")
    }

    if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }

    if (remainingTime < 0) {
      clearInterval(timer)
      showToast("Lift off! 🚀")
    }

  }, 1000)
}


// ITERATION 3: Show Toast


function showToast(message) {
  const toast = document.querySelector(".toast")
  const showToast = toast.classList
  showToast.add("show")

  const timeOutID = setTimeout(() => {
    showToast.remove("show")
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeButton = document.querySelector("#close-toast")
  closeButton.onclick = () => {
    clearTimeout(timeOutID)
    showToast.remove("show")
  }
  document.querySelector('#toast-message').innerHTML = message
}