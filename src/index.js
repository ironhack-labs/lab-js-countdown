const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const StartBtn = document.getElementById("start-btn");
const time = document.getElementById("time");
const toast = document.getElementById("toast");


StartBtn.addEventListener("click", () => {
  // You can call startCountdown() here when the button is clicked
  startCountdown();
});



// ITERATION 2: Start Countdown
function startCountdown() {

  timer = setInterval(() => {
    remainingTime--;
    time.textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      console.log ("stopped"); 
      showToast("Time's up!");
    }
  }, 1000);


  console.log("startCountdown called!");


  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {

toast.classList.add("show");

 setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
  console.log("showToast called!");

  // Your code goes here ...




// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
