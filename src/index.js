const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timeEl = document.getElementById("time")
const divToast = document.getElementById("toast")
const btnCloseToast = document.getElementById("close-toast")
const toastMessage = document.getElementById("toast-message")





// ITERATION 1: Add event listener to the start button

const btnStr = document.getElementById("start-btn")
btnStr.addEventListener("click", () => {
  startCountdown()
})




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  btnStr.setAttribute("disabled", true)
  timer = setInterval(() => {
    timeEl.textContent = remainingTime
    if (remainingTime === 10) {
      toastMessage.textContent = "⏰ Final countdown! ⏰"
      showToast()
    } else if (remainingTime === 5) {
      toastMessage.textContent = "Start the engines! 💥"
      showToast()
    } else if (remainingTime === 0) {
      clearInterval(timer)
      btnStr.removeAttribute("disabled")
      remainingTime = DURATION + 1
      toastMessage.textContent = "Lift off! 🚀"
      showToast()
    }
    remainingTime--
  }, 1000)

}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  divToast.classList.add("show")
  setTimeout(() => {
    divToast.classList.remove("show")
  }, 3000);
  btnCloseToast.addEventListener("click", () => {
    divToast.classList.remove("show")
  })
}


