const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const start = document.getElementById("start-btn")

start.addEventListener("click", startCountdown)
let count = document.getElementById("time")

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...

  const contador = setInterval(() => {
    if(remainingTime === 10){
      showToast("⏰ Final countdown! ⏰")
    }else if(remainingTime === 5){
      showToast("Start the engines! 💥")
      
    }

    

    if(remainingTime <= 0){
      showToast("Lift off! 🚀")
      remainingTime = 10
      clearInterval(contador)
      start.disabled = false;
    }else{
      remainingTime = remainingTime -1
      start.disabled = true;
    }
    count.textContent = remainingTime
  }, 1000)
  

}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
const toast = document.getElementById("toast")

toast.classList.add("show")

setTimeout(() => {
  toast.classList.remove("show")
}, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...

  const toastBtn = document.getElementById("close-toast")
  const toastMessage = document.getElementById("toast-message")
  toastMessage.textContent = message

  toastBtn.addEventListener("click", () => {
      toast.classList.remove("show")
  })

}
