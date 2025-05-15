const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtnElement = document.querySelector("#start-btn");
const divTimeElement = document.querySelector("#time");
const toastMessageElement = document.querySelector(".toast");
const closeToastElement = document.querySelector("#close-toast");


// ITERATION 1: Add event listener to the start button
startBtnElement.addEventListener("click", startCountdown);
closeToastElement.addEventListener("click", ()=>{
  toastMessageElement.classList.remove("show");
})

// Your code goes here ...




// ITERATION 2: Start Countdown
function startCountdown() {
  // console.log("startCountdown called!");
  timer = setInterval(()=>{
    divTimeElement.innerText = remainingTime;
    startBtnElement.disabled = true;
    if(remainingTime){
      if(remainingTime === 10){
      showToast("⏰ Final countdown! ⏰")
    }else if(remainingTime === 5){
      showToast("Start the engines! 💥")
    }

    }
    
  else if(!remainingTime){
    clearInterval(timer);
    showToast("Lift off! 🚀");
  }
  remainingTime --;



  },1000)



  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  // console.log("showToast called!");
  toastMessageElement.innerText = message
  toastMessageElement.classList.add("show")
  setTimeout(()=>{
    toastMessageElement.classList.remove("show")
  },3000)

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
