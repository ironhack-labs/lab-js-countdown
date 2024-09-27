const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastMsg = ('#toast-message')


// ITERATION 1: Add event listener to the start button
document.querySelector('#start-btn').onclick = () => {
  startCountdown()
}
// Your code goes here ...



// ITERATION 2: Start Countdown
timer = remainingTime

function startCountdown() {
  const startCount = setInterval(() => {
    document.querySelector("#start-btn").disabled = true;
    timer--
    document.querySelector('#time').innerHTML = timer

    if (timer === 9) {
      document.getElementById('toast-message').innerHTML = showToast("⏰ Final countdown! ⏰")
    }
    else if (timer === 5) {
      document.getElementById('toast-message').innerHTML = showToast('Start the engines! 💥')
    }
    else if (timer === 0) {
      document.getElementById('toast-message').innerHTML = showToast('Lift off! 🚀')
    }

    if (timer === 0) {
      clearInterval(startCount)
      showToast()
    }
  }, 1000)
}





// ITERATION 3: Show Toast


function showToast(message) {
  document.querySelector('#toast').classList.add('show')

  document.querySelector('#close-toast').onclick = () => {
    document.querySelector('#toast').classList.remove('show')
  }

  let toastOut = setTimeout(() => {
    document.querySelector('#toast').classList.remove('show')
  }, 3000)

}



