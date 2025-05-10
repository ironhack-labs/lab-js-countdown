const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const start = document.querySelector("#start-btn")
start.addEventListener("click" , () =>{
  startCountdown()
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  let timeDisplay = document.querySelector("#time")
  remainingTime = DURATION
  timeDisplay.textContent=remainingTime

const startBtn = document.querySelector("#start-btn")
startBtn.disabled = true



  timer = setInterval(() =>{
    timeDisplay.textContent=remainingTime
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    if(remainingTime === 0 ){
      clearInterval(timer)
      showToast("Lift off! 🚀")
      startBtn.disabled = false
    }
    
    remainingTime --
  }, 1000 )
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.querySelector("#toast")
  const toastMessage = document.querySelector("#toast-message")
  toastMessage.textContent = message
toast.classList.add("show")
 setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeBtn = document.querySelector("#close-toast")
  closeBtn.addEventListener("click", () =>{
     toast.classList.remove("show")
  })

}
