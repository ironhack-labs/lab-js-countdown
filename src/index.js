const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.querySelector("#start-btn").disabled = true;

  const countdownInterval = setInterval(function () {
    remainingTime--;
    let timeDisplay = document.getElementById("time");
    timeDisplay.textContent = remainingTime;
    if (remainingTime > 0) {
      return remainingTime;
    } else {
      showToast();
      clearInterval(countdownInterval);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");
  toast.classList.add("show");
  const timeOut = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeButton = document.querySelector("#close-toast");
  closeButton.addEventListener("click", closeToast);

  function closeToast() {
    toast.classList.remove("show");
  }
}
