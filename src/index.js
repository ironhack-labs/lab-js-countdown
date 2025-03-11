const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let showToastDiv = null;
const startButton = document.getElementById('start-btn');
const timerElement = document.getElementById('time');


// ITERATION 1: Add event listener to the start button
startButton.addEventListener('click', () => {
  startCountdown();
});



function timerCount() {
  if (remainingTime > 0) {
    remainingTime--; 
    timerElement.innerText = remainingTime;
  } else {
    clearInterval(timer); 
  }
  if (remainingTime == 3){
    showToast();
  }

}


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;
  remainingTime = DURATION;
  timerElement.innerText = remainingTime;

  clearInterval(timer);

  timer = setInterval(timerCount, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  document.getElementById('toast').className = "show", 3000;


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
};