const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtnElement = document.getElementById("start-btn");
const timerCount = document.getElementById("time");
const toastElement = document.getElementById("toast");
const closeToastElement = document.getElementById("close-toast");
const toastMessElement = document.getElementById("toast-message");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtnElement.addEventListener("click", () =>{
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
 const interval = setInterval(()=>{
  remainingTime--;
  timerCount.innerText = remainingTime;
  if (remainingTime === DURATION -1){
    showToast ("⏰ Final countdown! ⏰");
  }
  else if(remainingTime === 5){
    showToast ("Start the engines! 💥");
  }
  else if(remainingTime === 0){
    clearInterval(interval);
    showToast("Lift off! 🚀");
  }
 }, 1000) 
}


// ITERATION 3: Show Toast
function showToast(message) {
  toastMessElement.innerText = message;
  toastElement.classList.add("show");
  setTimeout(() => {
    toastElement.classList.remove("show");
   }, 3000);
 
}

 // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToastElement.addEventListener ("click", () =>{
  toastElement.classList.remove("show");
  remainingTime = DURATION;
  //updates the html element to reflect the variable
  timerCount.innerText = remainingTime;
});
