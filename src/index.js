const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let startButton = document.querySelector("#start-btn")

startButton.addEventListener("click",() => {
  startCountdown()
})
// ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...
timer = setInterval(() => {
remainingTime--
document.querySelector("#time").innerText = remainingTime

if (remainingTime <= 0 ){
  clearInterval(timer)
  showToast()
}
if (remainingTime === 9){
  showToast("⏰ Final countdown! ⏰")
}

if (remainingTime === 5){
  showToast("Start the engines! 💥")
}

if (remainingTime >0){
  startButton.disabled = true
}
},1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
 // console.log("showToast called!");

  // Your code goes here ...
  let toastNode = document.querySelector("#toast")
  
  //if (remainingTime === 0){
    toastNode.classList.add("show")
    setTimeout(() => {
      toastNode.classList.remove("show")
    },3000)
  

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

let toastCloseBtnNode = document.querySelector("#close-toast")
toastCloseBtnNode.addEventListener("click", () => {
  toastNode.classList.remove("show")
})



}
