let DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const countElement = document.querySelector("#time")
const toastElement = document.querySelector("#toast")
const closeElement = document.querySelector("#close-toast")
// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.querySelector("#start-btn")
startButton.addEventListener("click",startCountdown)

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled=true
const intervalId=setInterval(()=>{
  countElement.textContent = DURATION
  showToast()
  if (DURATION <= 0) {
    clearInterval(intervalId)
    return 
  }
  DURATION --

}, 1000)
}

  // Your code goes here ...





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  if (DURATION===10){
    toastElement.textContent = "⏰ Final countdown! ⏰"
  toastElement.classList.add("show")
  // Your code goes here ...
  closeElement.addEventListener("click",()=>{toastElement.classList.remove("show")})
timer=setTimeout(() => {
  toastElement.classList.remove("show")
}, 3000);}
else if (DURATION===5){
  toastElement.textContent = "Start the engines! 💥"
  toastElement.classList.add("show")
  // Your code goes here ...
  closeElement.addEventListener("click",()=>{toastElement.classList.remove("show")})
timer=setTimeout(() => {
  toastElement.classList.remove("show")
}, 3000);}

else if (DURATION===0){
  toastElement.textContent = "Lift off! 🚀"
  toastElement.classList.add("show")
  // Your code goes here ...
  closeElement.addEventListener("click",()=>{toastElement.classList.remove("show")})
timer=setTimeout(() => {
  toastElement.classList.remove("show")
}, 3000);
}


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
