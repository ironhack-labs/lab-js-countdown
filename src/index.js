const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn")

startBtn.addEventListener('click', startCountdown)




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timer = setInterval(() => {
    remainingTime--
    document.querySelector('#time').innerHTML = remainingTime
    showToast('⏰ Final countdown! ⏰')
    if (remainingTime === 5) {
      showToast('Start the engines! 💥"')

    } else if (remainingTime === 0) {
      showToast('Lift off! 🚀')
      clearInterval(timer)
    }
  }, 1000)

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
  document.querySelector('#toast').classList.add('show')
  document.querySelector('#toast-message').innerHTML = message

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToastBtn = document.querySelector('#close-toast')
  closeToastBtn.addEventListener('click', () => {
    document.querySelector('#toast').classList.remove('show')
    clearInterval(timer)
  })
}
