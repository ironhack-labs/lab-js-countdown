const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...





// ITERATION 2: Start Countdown
const startBtn = document.getElementById('start-btn');
const countDownDisplay = document.getElementById('Countdown')
const timeElement = document.getElementById('time')
let countDownValue = 10;
let intervalId;

function startCountdown() {
 intervalId = setInterval(() => {
    countDownValue --;
    countDownDisplay.textContent = countDownValue;
    timeElement.innerText = countDownValue;
  
  if (countDownValue === 0) {
    clearInterval(intervalId);
    console.log ('stop the clock')
  }
},1000);
}
startBtn.addEventListener('click', () => {
  console.log('start button clicked');
  startCountdown()
})
 

  // Your code goes here ...





// ITERATION 3: Show Toast
const list = toast.classList
list.add('show');

function showToast(message) {
  setTimeout(showToast,3000)
  clearTimeout(showToast,0)
  }

  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


