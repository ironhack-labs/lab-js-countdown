const DURATION = 5; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById('start-btn')

startButton.onclick = () => {
  startCountdown()
}



// ITERATION 2: Start Countdown
// Your code goes here ...

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
// Your code goes here ...

function showToast(message) {

  document.querySelector("#toast").classList.add('show')

  let toastOff = setTimeout(() => {
    document.querySelector('#toast').classList.remove('show')

  }, 3000)

}



// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...


