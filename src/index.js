const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let toastmessage = document.querySelector("#toast-message")
let startButton = document.querySelector("#start-btn")
//console.log(startButton)
startButton.addEventListener("click", () => {startCountdown()})


// ITERATION 2: Start Countdown
function startCountdown() {
//  console.log("startCountdown called!");
showToast("Final Countdown")

  // Your code goes here ...
let timeShown = document.querySelector("#time")
  let i = remainingTime;
  const intervalId = setInterval(function () {
    i--;
    timeShown.innerText=i;
    if (i === 5) {
      //console.log(i);
      //timeShown.innerText=i;
      startButton.disabled = true;
      showToast("Engines Starting")
    } 
    
    
     if(i === 0) { 
      timeShown.innerText=i;
      startButton.disabled = false;
      clearInterval(intervalId);
      showToast("Lift Off")
      
    }
  
    
  }, 1000);
  timeShown.innerText=DURATION
}




// ITERATION 3: Show Toast
function showToast(message) {
  //console.log("showToast called!");
  toastmessage.innerText=message
let toast = document.querySelector(".toast")
const toastDisplay = toast.classList;
//toastDisplay.toggle("show");
toastDisplay.add("show");
function hideToast() {
  toastDisplay.remove("show");
}
const timeoutId = setTimeout(hideToast, 3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  let closeToast = document.querySelector("#close-toast")
  closeToast.addEventListener("click", () => {hideToast()})

}
