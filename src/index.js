const DURATION = 3; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = 0; // Variable to store the interval

const startButton = document.getElementById("start-btn");
const time = document.getElementById("time");
const toastCard = document.querySelector(".toast");
const toast = document.getElementById("toast-message");
const closeToast = document.getElementById("close-toast");

// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  const interval = setInterval(() => {
    if (remainingTime === 0) {
      clearInterval(interval);
      showToast("Time's up!");
    } else {
      remainingTime--;
      time.innerText = remainingTime;
      console.log(remainingTime);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  toastCard.classList.add("show");

  setTimeout(() => {
    toastCard.classList.remove("show");
    console.log("show toast");
  }, 5000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  closeToast.addEventListener("click", () => {
    toastCard.classList.remove("show");
  });
}
