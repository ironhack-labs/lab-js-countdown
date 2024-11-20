const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const button = document.getElementById("start-btn");
button.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...

  button.disabled = true;
  showToast("⏰ Final countdown! ⏰");
  timer = setInterval(() => {
    remainingTime--;
    document.getElementById("time").innerText = remainingTime;

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    if (remainingTime < 0) {
      clearInterval(timer);
      timer = null;
      remainingTime = DURATION;
      document.getElementById("time").innerText = remainingTime;
      showToast("Lift off! 🚀");
      button.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastMessageElement = document.getElementById("toast-message");
  toastMessageElement.innerText = message;

  const toastElement = document.getElementById("toast");
  toastElement.classList.add("show");

  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}

const closeToast = document.getElementById("close-toast");
closeToast.addEventListener("click", function () {
  toastElement.classList.remove("show");
});
