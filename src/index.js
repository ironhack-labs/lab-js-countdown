const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = 0; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const countingTime = document.querySelector('#time');
const startButton = document.querySelector('#start-btn');
startButton.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
timer = !timer;
if (timer) {
  startButton.innerText = "Stop Timer";
  timer = countingTime(() => {
    document.getElementById('start-btn').disabled = false;
    remainingTime--;
    console.log(countingTime);
    if (remainingTime <= 0) {
      document.getElementById('start-btn').disabled = true;
      clearInterval(timer);
      showToast('#toast');
      startButton.innerText = "Start Timer"; 
    } }, 1000);
}
else {
  clearInterval(timer);
  remainingTime = DURATION; 
  startButton.innerText = "Start Timer"; 
} 
}





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
const listShow = Element.classShow;
listShow.toggle("show");
}




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

