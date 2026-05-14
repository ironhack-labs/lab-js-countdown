const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timerText = document.getElementById('time')
const toastCardMessage = document.getElementById('toast-message')


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById('start-btn')
startBtn.addEventListener('click', () => {
  startCountdown()
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timer = setInterval(() => {
    remainingTime--
    timerText.innerText = `${remainingTime}`
    startBtn.disabled = true
    if (remainingTime === 9) {
      showToast()
      toastCardMessage.innerText = '⏰ Final countdown! ⏰'
    }
    if (remainingTime === 5 ) {
      showToast()
      toastCardMessage.innerText = 'Start the engines! 💥'
    }
    if (remainingTime <= 0) {
      clearInterval(timer)
      showToast()
      toastCardMessage.innerText = 'Lift off! 🚀'
    }
  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
  const toastCard = document.getElementById('toast')
  toastCard.classList.add("show")
  let timerToast = setTimeout(() => {toastCard.classList.remove("show")}, 3000)
  const toastCloseBtn = document.getElementById('close-toast')
  toastCloseBtn.addEventListener('click', () => {
    clearTimeout(timerToast)
    toastCard.classList.remove("show")
  })

}
