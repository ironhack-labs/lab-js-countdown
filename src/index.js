const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timeContainer = document.getElementById("time")
const toastModal = document.getElementById("toast")
const closeToast = document.getElementById("close-toast")
const toastMsg = document.getElementById("toast-message")
console.log(toastMsg)


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startBtn = document.getElementById("start-btn")
startBtn.addEventListener('click', startCountdown)
closeToast.addEventListener('click', closeToastModal)

// ITERATION 2: Start Countdown
// Your code goes here ...

function startCountdown() {
  console.log("startCountdown called!");
  remainingTime = DURATION
  timeContainer.innerText = `${remainingTime}`
  let timer = setInterval(() => {
    remainingTime--
    timeContainer.innerText = `${remainingTime}`

    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰")
    } 
    if (remainingTime === 5) showToast("Start the engines! 💥")


    
    if (remainingTime <= 0) {
      clearInterval(timer)
      showToast("Lift off! 🚀")
    }
  },1000)

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastMsg.textContent = message
  // Your code goes here ...
  toastModal.style.visibility = "visible"
  toastModal.classList.add("show")

  setTimeout(() => {
    toastModal.classList.remove("show")
    toastModal.style.visibility = "hidden"
  }, 3000);


  
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...

function closeToastModal() {
  toastModal.style.visibility = "hidden"
}