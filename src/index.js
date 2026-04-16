const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timerText = document.querySelector("#time")
let toastCard = document.getElementById("toast")
let messageCard = document.getElementById("toast-message")
let closeButton = document.querySelector("span#close-toast")
timer = 1000



document.addEventListener("DOMContentLoaded", () => {
// ITERATION 1: Add event listener to the start button

const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", startCountdown);

let timerStopped  


// ITERATION 2: Start Countdown
function startCountdown() {
  
  console.log("startCountdown called!");
  startBtn.disabled = true;


  
 timerStopped = false 
 const countDown = setInterval(()=>{
   
   if (remainingTime ==10 )showToast("⏰ Final countdown! ⏰")
  remainingTime -= 1
  if ( remainingTime < 1){
    clearInterval(countDown);
  showToast("Lift off! 🚀")
  } else  if (remainingTime == 5) {
  
  showToast("Start the engines! 💥")
  }
timerText.innerText = remainingTime
console.log(remainingTime)

}, timer )



  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

messageCard.innerText = message
toastCard.classList.add("show")

let delayModal =  setTimeout(() => {
toastCard.classList.remove("show")
  }, 3000 ) 


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
 closeButton.addEventListener("click", ()=>{

 clearTimeout(delayModal)
 toastCard.classList.remove("show")

 })


}

})

