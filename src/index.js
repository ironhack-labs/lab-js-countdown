const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startBtn = document.querySelector("#start-btn")
let time = document.querySelector("#time")
let toastMsg = document.querySelector("#toast")

startBtn.addEventListener("click" , startCountdown)




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let setIntervalId = setInterval(() => {
    remainingTime -= 1
    time.innerText = remainingTime
    if(remainingTime <= 0){
      clearInterval(setIntervalId);
      showToast();
    }
  },1000)

  // Your code goes here ...
}



// ITERATION 3: Show Toast
function showToast(message) {
  

  // Your code goes here ...

  // message = "showToast called!"
  toastMsg.innerText = "showToast called!"
  toastMsg.style.visibility = "visible";
  console.log( toastMsg.innerText);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}