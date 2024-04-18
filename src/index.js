const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn")
startBtn.addEventListener("click", () => {
  startCountdown(10)
})


// ITERATION 2: Start Countdown
function startCountdown(timer) {
  console.log("startCountdown called!");


  // Your code goes here ...
  startBtn.disabled = true
  let remainingTime = timer
  updateTimerDisplay(remainingTime);
  const interval = setInterval(() => {
    remainingTime --;
    
  
    updateTimerDisplay(remainingTime);
    if(remainingTime === 0){
      clearInterval(interval)
      startBtn.disabled = false;
      showToast();
      
    }
    
  },1000)
  
}
function updateTimerDisplay(time){
  const formattedTime = document.getElementById("time");
formattedTime.textContent = `${time}`

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

const toastId = document.getElementById("toast")
// const toastMsg = document.getElementById("toast-message")
// toastMsg.textContent = message;
toastId.classList.add("show");
setTimeout(() => {
  toastId.classList.remove("show")
  // toastMsg.textContent = message
},3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
