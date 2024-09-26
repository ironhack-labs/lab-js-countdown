const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.getElementById("start-btn").addEventListener("click", startCountdown);
// ITERATION 2: Start Countdown

// Your code goes here ...

function startCountdown() {
  let counter = 10;
  const timeElement = document.getElementById("time");
  const countDown = setInterval(function () {
    timeElement.innerText = counter;
    if (counter === 1) {
      clearInterval(countDown);
    }
    console.log(counter);
    counter--;
  }, 1000);

  console.log("startCountdown called!");
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
