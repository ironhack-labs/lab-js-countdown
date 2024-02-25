const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);
// Your code goes here ...

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;
  timer = setInterval(function () {
    remainingTime--;
    document.getElementById("time").textContent = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Countdown finished !");
      startButton.disabled = false;
    }
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastElement = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-messege");
  toastMessage.textContent = message;
  toastElement.classList.add("show");

  setTimeout(function () {
    toastElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
