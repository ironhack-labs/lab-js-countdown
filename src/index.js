const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startButton = document.getElementById('start-btn');

startButton.addEventListener('click', startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

let counter = document.querySelector('#time');

let count = 10;

counter.textContent = count;

let intervalId = setInterval(() => {
  count --;
  counter.textContent = count;
  if (count === 0) {
    showToast()
    clearInterval(intervalId);
  }
}, 1000);

}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  let toastCard = document.getElementById('toast');
  toastCard.classList.add('show');



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
