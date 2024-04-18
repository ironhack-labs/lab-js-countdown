const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

let divTime=document.querySelector("#time")
let toast=document.querySelector("#toast")
let closeToast=document.querySelector("#close-toast")
let messageToast=document.querySelector("#toast-message")

// ITERATION 1: Add event listener to the start button
let startBtn=document.querySelector("#start-btn")
startBtn.addEventListener("click",()=>{
  startCountdown()
  startBtn.style.display = "none";
})

// ITERATION 2: Start Countdown
function startCountdown() {
  //console.log("startCountdown called!");
  messageToast.innerText=``

// BONUS: ITERATION 5: MORE TOAST
  let intervalo=setInterval(()=>{
    if(remainingTime===10){
      showToast("⏰ Final countdown! ⏰")
    }
    if(remainingTime===5){
      showToast("Start the engines! 💥")
    }
    if(remainingTime===1){
      clearInterval(intervalo)
      showToast("Lift off! 🚀")
    }
    remainingTime--
    divTime.innerText=`${remainingTime}`
  },1000)
}

// ITERATION 3: Show Toast
function showToast(message) {
  //console.log("showToast called!");
  messageToast.innerText=`${message}`
  toast.classList.toggle("show")

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToast.addEventListener("click",()=>{
    remainingTime = DURATION
    divTime.innerText=`${DURATION}`
    startBtn.style.display = "block";
    toast.classList.toggle("show")
  })
}
