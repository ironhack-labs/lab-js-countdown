const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timerText = document.querySelector("#time")
let toastCard = document.getElementById("toast")
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
remainingTime -= 1
timerText.innerText = remainingTime
console.log(remainingTime)

if ( remainingTime < 1){
  clearInterval(countDown);
showToast()
}
}, timer )



  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

toastCard.classList.add("show")
  setTimeout(() => {
toastCard.classList.remove
  }, 3000 ) 


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}

})