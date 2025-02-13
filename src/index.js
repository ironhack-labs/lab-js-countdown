const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = document.getElementById("time"); // Variable to store the interval
const buttonStart = document.getElementById("start-btn");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

buttonStart.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("Empezo la cuenta atras");

  let timer = setInterval(function () {
    remainingTime -= 1;
    time.innerHTML = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
    }
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
