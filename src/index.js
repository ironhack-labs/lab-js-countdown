const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeout;

const time = document.getElementById("time")
time.innerText = DURATION.toString()

const toast = document.getElementById("toast")
const toastMessage = document.getElementById("toast-message")

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn")
startButton.addEventListener("click", function () {
  if (remainingTime <= 0) {
    window.location.reload();
  }
  startCountdown()
  startButton.disabled = true;
})


const closeToast = document.getElementById("close-toast")
closeToast.addEventListener("click", function () {
  toast.classList.toggle("show")
  clearTimeout(timeout)
})




// ITERATION 2: Start Countdown
function startCountdown() {


  // Your code goes here ...
  timer = setInterval(function () {
    time.innerText = remainingTime.toString()

    if (remainingTime <= 0) {
      clearInterval(timer)
      startButton.innerText = 'Restart countdown'
      startButton.disabled = false;
      showToast("Lift off! 🚀")
    }
    else if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰")
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }
    remainingTime--;

  }, 1000)

}




// ITERATION 3: Show Toast
function showToast(message) {

  // Your code goes here ...
  toast.classList.add("show");

  timeout = setTimeout(function () {
    toast.classList.remove("show");
  }, 3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  toastMessage.innerText = message


}
