const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
let startBtn = document.getElementById("start-btn")
startBtn.addEventListener("click", startCountdown)

// Your code goes here ...
// ITERATION 2: Start Countdown
function startCountdown() {
  let counter = 10;
  document.getElementById("start-btn").disabled = true
  let idInterval = setInterval(() => {
    document.getElementById("time").innerText = counter;

    if (counter === 10) {
      showToast("⏰ Final countdown! ⏰")
    }

    if (counter === 5) {
      showToast("Start the engines! 💥")
    }
     
    if (counter === 0) {
      clearInterval(idInterval)
      document.getElementById("start-btn").disabled = false
      showToast("Lift off! 🚀")
    }

    counter --
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) { 
  let btnClose = document.getElementById("close-toast")
  btnClose.addEventListener("click", () => {
    document.getElementById("toast").classList.remove("show")
  })

  document.getElementById("toast").classList.add("show")

  document.getElementById("toast-message").innerText = message

  setTimeout( () => {
    document.getElementById("toast").classList.remove("show")
  }, 3000)

}
