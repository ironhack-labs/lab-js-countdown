const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn");
startButton.onclick = function () {
  startCountdown();
};

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...

  const countdownInterval = setInterval(function () {
    console.log(remainingTime);
    startButton.disabled = true;

    const timeElement = document.getElementById("time");
    timeElement.innerText = remainingTime;

    remainingTime--; // Decrement the time

    if (remainingTime < 0) {
      // When remainingTime reaches below zero, stop the countdown
      clearInterval(countdownInterval);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  const list = document.getElementById("toast").classList;
  list.add("show");
  const timeoutId = setTimeout(function () {
    list.remove("show");
  }, 3000);

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
