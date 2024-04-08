const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;

  const countDown = setInterval(() => {
    remainingTime--;
    let timeDisplay = document.getElementById("time");
    timeDisplay.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(countDown);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast() {
  console.log("showToast called!");

  let toastCard = document.getElementById("toast");
  toastCard.classList.add("show");

  const countDown = setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
