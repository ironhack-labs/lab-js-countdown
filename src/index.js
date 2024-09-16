const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const intervalId = setInterval(function () {
    remainingTime--;

    let displayedTime = document.querySelector("#time");
    displayedTime.textContent = remainingTime;

    startButton.disabled = true;

    if (remainingTime === 0) {
      clearInterval(intervalId);
      startButton.disabled = false;
      showToast();
    }
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toastMessage = document.querySelector(".toast");
  toastMessage.classList.add("show");

  const intervalId = setInterval(function () {
      toastMessage.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
