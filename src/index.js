const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

let countdownButton = document.getElementById('start-btn')

countdownButton.onclick = () => {
  startCountdown()
}


// ITERATION 2: Start Countdown

function startCountdown() {

  let timer = setInterval(() => {
    document.getElementById('start-btn').disabled = true
    remainingTime--
    document.getElementById('time').innerHTML = remainingTime

    if (remainingTime === 0) {
      clearInterval(timer)
      showToast()
    }
  }, 1000)
}


// ITERATION 3: Show Toast
function showToast(message) {
  document.getElementById('toast').classList.add('show')

  let timer2 = setTimeout(() => {
    document.getElementById('toast').classList.remove('show')
    if (timer2 === 0) {
      clearTimeout(timer2)
    }
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}

