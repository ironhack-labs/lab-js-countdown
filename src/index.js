const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", function() {
  startCountdown(DURATION);
});

// ITERATION 2: Start Countdown
function startCountdown(timer) {
  console.log("startCountdown called!")

  // Your code goes here ...
  startButton.disabled = true;

  let remainingTime = timer; 
  //console.log(`Remaining time: ${remainingTime} seconds`);
  updateTimeDisplay(remainingTime);
  const interval = setInterval(() => {
    remainingTime--; 
    //console.log(`Remaining time: ${remainingTime} seconds`);
    updateTimeDisplay(remainingTime);
    if (remainingTime === 0) {
      clearInterval(interval);
      console.log("Countdown finished!");
      showToast();
      startButton.disabled = false;
    }
},1000)

}
function updateTimeDisplay(time) {
  const timeElement = document.getElementById('time');
  timeElement.textContent = `${time}`;

  let emoji = '';
  for (let i = 0; i < time; i++) {
    emoji += '🐱'; 

  timeElement.textContent = emoji;
}}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  const toastElement = document.getElementById('toast');
  toastElement.classList.add('show');
  setTimeout(() => {
    toastElement.classList.remove('show');
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
