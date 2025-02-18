const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  let remainingTime = 10;
  const timeElement = document.getElementById("time");
  const countdown = setInterval(() => {
    if (remainingTime > 0) {
      console.log(remainingTime);
      timeElement.textContent = remainingTime;
      remainingTime--, (startButton.disabled = true);
      if (remainingTime == 9) {
        showToast("⏰ Final countdown! ⏰");
      } else if (remainingTime == 5) {
        showToast("Start the engines! 💥");
      } else if (remainingTime == 0) {
        showToast("Lift off! 🚀");
        clearInterval(countdown);
      }
    }
  }, 1000);
  console.log("startCountdown called!");
}

// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  toastMessage.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

const closeToast = document.getElementById("close-toast");
closeToast.addEventListener("click", () => {
  toast.classList.remove("show");
});
