const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startCountdown);

function startCountdown() {
  console.log("Countdown started!");
}

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");



  // Your code goes here ...
  let timeLeft = 10;
  let timerInterval;

  const timeElement = document.getElementById("time");
  const startButton = document.getElementById("start-btn");

  startButton.addEventListener("click", startCountdown);
  function startCountdown() {
    startButton.disabled = true;

    timeElement.textContent = timeLeft;

    timerInterval = setInterval(() => {
      timeLeft--;

      timeElement.textContent = timeLeft;

      if (timeLeft === 0) {
        clearInterval(timerInterval);
        showToast();
      }
    }, 1000);
  }
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  
const toastCard = document.getElementById('toast');
const closeToast = document.getElementById('close-toast');

function showToast() {
  toastCard.classList.add('show');

  setTimeout(() => {
    toastCard.classList.remove('show');
  }, 3000); 
}
closeToast.addEventListener('click', () => {
  toastCard.classList.remove('show');
});

}
 
// ITERATION 4: Toast Close Button

// Your code goes here...

const toastCard = document.getElementById('toast');
const closeToast = document.getElementById('close-toast');

let toastTimeout;

function showToast() {
  toastCard.classList.add('show');

  toastTimeout = setTimeout(() => {
    toastCard.classList.remove('show');
  }, 3000); 
}

closeToast.addEventListener('click', () => {
  clearTimeout(toastTimeout);

  toastCard.classList.remove('show');
});
