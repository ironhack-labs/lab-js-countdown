const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("button")

startButton.addEventListener("click", startCountdown)



// ITERATION 2: Start Countdown
function startCountdown() {
  let timer = setInterval(() => {
    remainingTime--

    document.querySelector('#time').innerText = remainingTime

    if (remainingTime === 0) {
      clearInterval(timer)
      showToast()
    }

  }, 100)

  startButton.disabled = true

}


// ITERATION 3: Show Toast
function showToast(message) {


  let toastCard = document.querySelector('#toast')

  toastCard.classList.add("show")

  const timeoutID = setTimeout(() => {
    toastCard.classList.remove("show")

  }, 3000)






  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  let closeButton = document.querySelector("#close-toast")

  closeButton.addEventListener("click", () => {
    clearTimeout(closeButton)
    toastCard.classList.remove("show")

  })

}