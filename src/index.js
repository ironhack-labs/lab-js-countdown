const DURATION = 10; // 10 seconds

let remainingTime = DURATION; // Countdown starting from 10
let timer = document.querySelector("#time") // Variable to store the interval
timer.innerText = `${DURATION}`
let toast = document.querySelector(".toast")
toast.style.webkitAnimation = "fadein 0.5s, fadeout 0.9s 2.5s";
toast.style.animation = `fadein 0.5s, fadeout 0.9s 2.5s`;
let countdownOn = false

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtnNode = document.querySelector("#start-btn")
startBtnNode.addEventListener("click", () => {
  if (!countdownOn){
    startCountdown()
    countdownOn = true
  }
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let finalCountdown = setInterval(() => {
    remainingTime--;
    timer.innerText = `${remainingTime}`
    if (remainingTime<=0){
      clearInterval(finalCountdown)
      showToast()
    }
  },1000)

  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast() {
  toast.style.visibility = `visible`
  
  setTimeout(() => {
    toast.style.visibility = `hidden`
  },3000)
  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
