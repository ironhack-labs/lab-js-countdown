const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn")
startBtn.addEventListener("click", () => {
  startCountdown()
})

const showTime = document.getElementById("time")
const toastObj = document.getElementById("toast")
const closeToastBtn = document.getElementById("close-toast")



// ITERATION 2: Start Countdown
function startCountdown() {
  // console.log("startCountdown called!");

  // Your code goes here ...
  let counter = 10
  const timerId = setInterval(() => {
    // console.log(counter)

    counter--
    showTime.innerText = `${counter}`
    if (counter < 1) {
      clearInterval(timerId)     
      showTime.innerText = "10"
      showToast("Some toast message.")
      startBtn.disabled = false

    } else {
      startBtn.disabled = true
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  // console.log("showToast called!");

  // Your code goes here ...
  toastObj.classList.add("show")

  closeToastBtn.addEventListener("click", () => {
    toastObj.classList.remove("show")  
    clearInterval(timerID2)  
  })

  const timerID2 = setTimeout(() => {
      toastObj.classList.remove("show")    
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
