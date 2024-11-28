const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.querySelector('#start-btn').addEventListener('click', startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  let counter = 10;
  document.getElementById('start-btn').disabled = true;
  const id = setInterval(function () {
    counter--;
    document.getElementById('time').innerHTML = counter;
    if (counter === 0) {
      showToast();
      clearInterval(id);
    }
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  // Your code goes here ...
  document.querySelector('#toast').classList.toggle('show');
  setTimeout(function () {
    document.querySelector('#toast').classList.toggle('show');
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
