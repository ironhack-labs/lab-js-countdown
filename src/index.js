const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  startBtn.disabled = true;
const finalCountdown = setInterval(() => {
  remainingTime--;
  document.getElementById("time").innerText = remainingTime;
  if (remainingTime === 0) {
    clearInterval(finalCountdown);
    startBtn.disabled = false;
    remainingTime = DURATION;
    showToast();
  }
  
}, 1000);
}
  // Your code goes here ...





// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.querySelector(".toast");
  toast.innerText = message;
  console.log("showToast called!");
  
  // Your code goes here ...



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
