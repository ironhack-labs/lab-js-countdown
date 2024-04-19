const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let toastIdNode = document.querySelector("#toast")
let startButtonNode=document.querySelector("#start-btn")
let timerNode=document.querySelector(`#time`)
//console.log(startButton)
startButtonNode.addEventListener("click", ()=>{
console.log("patata")
startCountdown()
})

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButtonNode.disabled=true
timer=setInterval(()=>{
timerNode.innerText--
if(timerNode.innerText<=0){
  //startButtonNode.disabled=false
  clearInterval(timer)
  showToast()
}
},1000)

  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
message=document.querySelector("#toast-message").innerText
  // Your code goes here ...
let toastProperty=document.getElementById("toast").classList
toastProperty.add("show")
  
let threeSecondTimer = setTimeout(()=>{
  toastProperty.remove("show")

},3000)
//toastIdNode.style.display="block"

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
