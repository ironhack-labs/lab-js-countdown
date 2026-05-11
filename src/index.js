const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// On récupère les éléments HTML
const startButton = document.querySelector("#start-btn");
const timeElement = document.querySelector("#time");
const toastElement = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");

// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  remainingTime = DURATION;
  timeElement.textContent = remainingTime;

  startButton.disabled = true;

  timer = setInterval(function () {
    remainingTime--;

    timeElement.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);

      startButton.disabled = false;

      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toastMessage.textContent = message;

  toastElement.classList.add("show");

  setTimeout(function () {
    toastElement.classList.remove("show");
  }, 3000);
}



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


