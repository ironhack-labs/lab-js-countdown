const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...  
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown


  // Your code goes here ...
  function startCountdown() {
    console.log("startCountdown called!");
    timer = setInterval(updateTime, 1000);
  }
  
  function updateTime() {
    remainingTime--;
    console.log(`Time remaining: ${remainingTime} seconds`);
  
    // Update the div#time element to display the remaining time
    const timeDisplay = document.getElementById("time");
    timeDisplay.textContent = remainingTime;
  
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Time's up!");
    }
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  function showToast(message) {
    console.log("showToast called!");
    alert(message);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}}
