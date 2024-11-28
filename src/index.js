//
//
//
//
//
const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
document.querySelector("#start-btn").addEventListener("click", function () {
  startCountdown();
});

// ITERATION 2: Start Countdown
const time = document.querySelector("div#time");
function startCountdown() {
  console.log("startCountdown called!");

  let myInterval = setInterval(function () {
    remainingTime -= 1;
    time.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(myInterval);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
