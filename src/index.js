const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

let timerNode = document.querySelector("#time")


// ITERATION 1: Add event listener to the start button

// Your code goes here ...




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...

   timer = setInterval(() =>{
  remainingTime --;
  timerNode.innerText = `${remainingTime}`
  document.getElementById("start-btn").disabled = true

  if(remainingTime === 0){
    clearInterval(timer)
    showToast()
  }

  },1000) 

}

let startButtonNode = document.querySelector("#start-btn")
startButtonNode.addEventListener("click",() =>{
startCountdown()

})


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
MessageNode = document.querySelector(".toast")

MessageNode.style.visibility = "visible"


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

} closeToastNode = document.querySelector("#close-toast")

closeToastNode.addEventListener("click",() =>{
  MessageNode.style.visibility = "hidden"

})
