const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

let startButtonNode = document.querySelector("#start-btn")

let timerNode = document.querySelector("#time")

let toastIdNode = document.querySelector("#toast")
//console.log(startButton);
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButtonNode.addEventListener("click",()=>{
  startCountdown()
  console.log("aaa");
})   




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButtonNode.disabled = true
 timer = setInterval(()=>{
timerNode.innerText--
 if (timerNode.innerText <= 0){

  
  clearInterval(timer)
  showToast()
 }
 },1000)

  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  message = document.querySelector("#toast-message").innnerText
 
  let toastProperty = document.getElementById("toast").classList;
  toastProperty.add("show")
  let ThreeSecondTimer = setTimeout(()=>{
    toastProperty.remove("show")

  },3000)
  

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
