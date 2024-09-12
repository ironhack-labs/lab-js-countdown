const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
}

let remainingTime = 10;
let countdownInterval;

function startCountdown() {
  startButton.disabled = true; 

  countdownInterval = setInterval(function () {
    remainingTime--;

    
    document.getElementById('time').innerText = remainingTime;

    if (remainingTime === 0) {
      clearInterval(countdownInterval); 
      showToast();
    }
  }, 1000); 
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  function showToast() {
    const toastElement = document.getElementById('toast');
  
    /
    toastElement.classList.add('show');
  
    
    setTimeout(function () {
      toastElement.classList.remove('show'); 
      startButton.disabled = false; 
    }, 3000);
  }



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
