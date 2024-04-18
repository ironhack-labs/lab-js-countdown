const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const timeSelector = document.querySelector('#time')
const startBtn = document.querySelector('#start-btn')
const toastWindow = document.querySelector('#toast')
const toastCloseBtn = document.querySelector('#close-toast')
const toastMsg = document.querySelector('#toast-message')

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = startBtn.addEventListener('click', startCountdown)



// ITERATION 2: Start Countdown
function startCountdown() {

  console.log("startCountdown called!");
  // Your code goes here ...

  startBtn.disabled = true

  timer = setInterval(() => {

    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰")
    }

    remainingTime--
    timeSelector.innerText = remainingTime

    if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }

    if (remainingTime === 0) {
      showToast("Lift off! 🚀")
      clearInterval(timer)
    }

  }, 1000)
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastMsg.innerText = message
  toastWindow.setAttribute('class', 'toast show')

  setTimeout(() => {
    toastWindow.setAttribute('class', 'toast')
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  toastCloseBtn.addEventListener('click', () => {
    toastWindow.setAttribute('class', 'toast')
  })

}
