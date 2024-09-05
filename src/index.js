const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const btnNode = document.querySelector("#start-btn")
const timeNode = document.querySelector("#time")
const toastNode = document.querySelector("#toast")
const closeToastNode = document.querySelector("#close-toast")
const toastMessage = document.querySelector("#toast-message")

// ITERATION 1: Add event listener to the start button

btnNode.addEventListener("click", () => {
  startCountdown()
})

closeToastNode.addEventListener("click", () => {
  toastNode.classList.remove("show")
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  remainingTime = DURATION

  timer = setInterval(() => {
    
    if (remainingTime === 10) {
      showToast(`⏰ Final countdown! ⏰`)
    } else if (remainingTime === 5) {
      showToast(`Start the engines! 💥`) 
    } else if (remainingTime === 0) {
      clearInterval(timer)
      showToast("Lift off! 🚀")
    }
    timeNode.innerText = `${remainingTime}`
    remainingTime--
    
  }, 1000)

}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toastMessage.innerText = message
  toastNode.classList.add("show")

  setTimeout(() => {
    toastNode.classList.remove("show")
  }, 3000)

  

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
