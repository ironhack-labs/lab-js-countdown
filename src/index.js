const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const button = document.querySelector("#start-btn")

button.onclick = () => {
  startCountdown()
}



// ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...
  counterValue = 10

  let intervalId = setInterval(() => {
    counterValue--
    document.querySelector('#time').innerText = counterValue

    const startBtn = document.querySelector('#start-btn')
    startBtn.setAttribute("disabled", "true")

    if (counterValue === 0) {
      clearInterval(intervalId)
      showToast()
    }


  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  // Your code goes here ...
  const toast = document.querySelector('#toast')
  toast.classList.add("show")

  const timeoutId = setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const button = document.querySelector("#close-toast")

  button.onclick = () => {
    const toast = document.querySelector('#toast')
    toast.classList.remove("show")
  }
}