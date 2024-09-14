const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtn = document.querySelector("#start-btn")
let timerDiv = document.querySelector("#time")
let message = document.querySelector("#toast")
let close = document.querySelector("#close-toast")


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtn.addEventListener("click", () => {
  startCountdown()
})



// ITERATION 2: Start Countdown
function startCountdown() {

  console.log("startCountdown called!");
  let intervalId = setInterval(() => {
    timerDiv.innerText--
    startBtn.disabled = true
      if (timerDiv.innerText == 0) {
        clearInterval(intervalId)
        startBtn.disabled = false
        showToast()
      }
  }, 1000)

}




// ITERATION 3: Show Toast
function showToast() {
  message.classList.add("show")
  // if (timerDiv.innerText == 10) {
  //   message.innerText = "⏰ Final countdown! ⏰"
  // }
  // else if (timerDiv.innerText == 5) {
  //   message.innerText = "Start the engines! 💥"
  // }
  // else if (timerDiv.innerText == 0) {
  //   message.innerText = "Lift off! 🚀"
  // }


  setTimeout(() => {
  message.classList.remove("show")
  }, 3000)
  




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  close.addEventListener("click", () => {
    message.classList.remove("show")
  })

}
