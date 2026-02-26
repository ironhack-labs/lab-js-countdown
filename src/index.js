let DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const toastMessage = document.getElementById('toast-message')
const toastCard = document.getElementById('toast')
const seconds = document.getElementById('time')
const startButton = document.getElementById('start-btn')


startButton.addEventListener('click', () => {
  startCountdown()
  DURATION = 10
})


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById('start-btn').disabled = true
  
  timer = setInterval(() => {

    if(DURATION === 10) {
      showToast('⏰ Final countdown! ⏰')
    }

    if(DURATION === 5) {
      showToast('Start the engines! 💥')
    }

    if(DURATION <= 1) {
      clearInterval(timer)
      showToast('Lift off! 🚀')
      document.getElementById('start-btn').disabled = false
    }
    DURATION--
    seconds.innerText = `${DURATION}`
  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastCard.classList.add('show')
  toastMessage.innerText = message
  
  const hideToast = setTimeout(() => {
    toastCard.classList.remove('show')
  }, 3000)



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.getElementById('close-toast').addEventListener('click', () => {
    clearTimeout(hideToast)
    toastCard.classList.remove('show')
  })

}
