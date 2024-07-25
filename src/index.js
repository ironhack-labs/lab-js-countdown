const DURATION = 10 // 10 seconds
let remainingTime = DURATION // Countdown starting from 10
let timer = null // Variable to store the interval

const startButton = document.querySelector('#start-btn')
const toastCard = document.querySelector('#toast')
const timeDisplayed = document.querySelector('#time')
const closeToast = document.querySelector('#close-toast')
const toastMessage = document.querySelector('#toast-message')

timeDisplayed.textContent = DURATION

// ITERATION 1: Add event listener to the start button
startButton.addEventListener('click', startCountdown)


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!")

  // Disable the start button and reset the countdown
  startButton.disabled = true
  remainingTime = DURATION
  timeDisplayed.textContent = remainingTime

  // Start the countdown
  timer = setInterval(() => {
    showToast("⏰ Final countdown! ⏰")
    remainingTime--
    timeDisplayed.textContent = remainingTime
  
    if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }
    if (remainingTime <= 0) {
      clearInterval(timer)
      showToast("Lift off! 🚀")
      timer = null

      // Show 0 for 1 second, then reset to DURATION
      setTimeout(() => {
        timeDisplayed.textContent = DURATION
        startButton.disabled = false
      }, 1000)
    }
  }, 1000)
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!")

  toastCard.classList.add('show')
  toastMessage.textContent = message
  const timeoutId = setTimeout(() => {
    toastCard.classList.remove('show')
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToast.addEventListener('click', () => {
    toastCard.classList.remove('show')
    clearTimeout(timeoutId)
  })
  
}
