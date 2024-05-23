const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let startButton = document.querySelector("#start-btn");
let counterTime = document.querySelector("#time");
let count = 10;
let toastMessage = document.querySelector("#toast");
let timeOutId = null;
let closeToast = document.querySelector("#close-toast");
let messageText = document.querySelector("#toast-message");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  // count--;
  // counterTime.textContent = count;
  // startButton.disabled = true
  console.log("startCountdown called!");
  timer = setInterval(() => {
    count--;
    counterTime.textContent = count;
    if (count === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (count === 5) {
      showToast("Start the engines! 💥");
    } else if (count <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
    // count--;
    counterTime.textContent = count;
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  messageText.textContent = message;

  toastMessage.classList.add("show");
  // Your code goes here ...
  timeOutId = setTimeout(() => {
    toastMessage.classList.remove("show");
  }, 3000);

  closeToast.addEventListener("click", () => {
    toastMessage.classList.remove("show");
  });
  
  startButton.disabled = true
}
