const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startTheTimerButton = document.body.querySelector("#start-btn");
const toastMessage = document.body.querySelector("#toast-message");

startTheTimerButton.addEventListener("click", () => {
  startCountdown();
  showToast("⏰ Final countdown! ⏰");
});

const showTimer = document.body.querySelector("#time");
// ITERATION 2: Start Countdown

showTimer.innerHTML = remainingTime;

function startCountdown() {
  console.log("startCountdown called!");
  showTimer.innerHTML = remainingTime;
  startTheTimerButton.disabled = true;
  const interval = setInterval(() => {
    remainingTime--;
    showTimer.innerHTML = remainingTime;
    if (remainingTime === 5) showToast("Start the engines! 💥");
    if (remainingTime == 0) {
      clearInterval(interval);
      showToast("Lift off! 🚀");
      showTimer.innerHTML = remainingTime;
      startTheTimerButton.disabled = false;
    }
  }, 1000);
  remainingTime = DURATION;
  return (showTimer.innerHTML = remainingTime);
}

// ITERATION 3: Show Toast

function showToast(message) {
  console.log("showToast called!");

  toastMessage.innerHTML = message;

  // Your code goes here ...
  const toastBlock = document.body.querySelector("#toast");
  toastBlock.classList.add("show");

  setTimeout(() => {
    toastBlock.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeToastButton = document.body.querySelector("#close-toast");

  closeToastButton.addEventListener("click", () => {
    toastBlock.classList.remove("show");
  });

  // Your code goes here ...
}
