const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let buttonNode = document.querySelector("#start-btn")
buttonNode.addEventListener("click", startCountdown)

let divTimeNode = document.querySelector("#time")
let toastCardNode = document.querySelector("#toast")
let toastCardMeassageNode = document.querySelector("#toast-message")
let toastCloseButtonNode = document.querySelector("#close-toast")




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let countdownIntervalId = setInterval(() => {
    if (remainingTime === DURATION) {
      showToast("⏰ Final countdown! ⏰")
    }
    remainingTime -= 1
    divTimeNode.innerText = remainingTime
    if (remainingTime === 0) {
      clearInterval(countdownIntervalId)
      showToast("Lift off! 🚀")
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }
  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastCardMeassageNode.innerText = message
  toastCardNode.classList.add("show")

  let timeOutId = setTimeout(() => {
    toastCardNode.classList.remove("show")
    if (remainingTime === 0) {
      remainingTime = DURATION
      divTimeNode.innerText = remainingTime
    }
  }, 3000);

  toastCloseButtonNode.addEventListener(("click"), () => {
    toastCardNode.classList.remove("show")
    clearTimeout(timeOutId)
  })


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
