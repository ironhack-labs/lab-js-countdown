const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.getElementById('start-btn').addEventListener('click', startCountdown);


// ITERATION 2: Start Countdown
//let Countdown;

function startCountdown() {

  // Your code goes here ...
  document.getElementById('start-btn').disabled = true;

  updateDisplay(remainingTime);

  countDownTimer = setInterval(() => {
    remainingTime--

    updateDisplay(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(countDownTimer);
      showToast();
      document.getElementById('start-btn').disabled = false;
    }
  }, 1000);
}

function updateDisplay(timer) {
  document.getElementById('time').innerText = timer;
}

console.log("startCountdown called!");



// ITERATION 3: Show Toast
function showToast(message) {



  // Your code goes here ...

  alert("Time's up");

  console.log("showToast called!");


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
