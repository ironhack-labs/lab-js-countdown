const DURATION = 10 // 10 seconds
let remainingTime = DURATION // Countdown starting from 10
let timer = null // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn")
const timeView = document.getElementById("time")
const toast = document.getElementById("toast")
const toastMessage = document.getElementById("toast-message")
const closeToastButton = document.getElementById("close-toast")

// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.addEventListener("click", () => {
    timer = setInterval(() => {
      remainingTime--
      timeView.innerHTML = remainingTime

      if (remainingTime === 0) {
        clearInterval(timer)
        showToast("Lift off! 🚀")
      }
    }, 1000)
  })
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!")
  toastMessage.textContent = message
  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
closeToastButton.addEventListener("click", () => {
  toast.classList.remove("show")
})

// Call the startCountdown function
startCountdown()