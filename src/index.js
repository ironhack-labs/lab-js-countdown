const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  let counter = 10;
  const displayTime = document.getElementById("time");
  displayTime.innerText = counter;
  const id = setInterval(function () {
    counter--;
    console.log(`hello ${counter}`);
    displayTime.innerText = counter;
    if (counter === 0) {
      clearInterval(id);
    }
  }, 1000);
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
