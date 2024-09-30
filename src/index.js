let DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const displayTimer = document.getElementById("time");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const toastClose = document.getElementById("close-toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const buttonStart = document.getElementById("start-btn");
buttonStart.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timer = setInterval(() => {
    remainingTime--;
    displayTimer.innerText = remainingTime;
    console.log(remainingTime);
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
  buttonStart.disabled = true;
}
//
//

// Your code goes here ...

// ITERATION 3: Show Toast
function showToast(message) {
  toastMessage.innerText = message;

  console.log("showToast called!");

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

toastClose.addEventListener("click", () => {
  toast.classList.remove("show");
});

// Your code goes here ...

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
