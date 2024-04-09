const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startButton = document.getElementById("start-btn");
const toastElement = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButton.addEventListener("click", () => startCountdown());

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startButton.disabled = true;

  // Your code goes here ...
  timer = setInterval(() => {
    document.getElementById("time").innerText = remainingTime;
    if (remainingTime == 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime == 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast
const _SHOW = "show";
function showToast(message) {
  console.log("showToast called!", message);

  toastElement.classList.add(_SHOW);
  toastMessage.textContent = message;
  const timeoutId = setTimeout(
    () => toastElement.classList.remove(_SHOW),
    3000
  );
  toastElement.addEventListener("click", () => toastElement.classList.remove(_SHOW));
}
