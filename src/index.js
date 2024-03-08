const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let intervalId = null; // Variable to store the interval
let start = document.getElementById("start-btn");
let toast = document.getElementById("toast");
let time = 10;
let secondsElement = document.getElementById("time");
let x = document.getElementById("close-toast");
let toastMessage = document.getElementById("toast-message");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

start.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  start.disabled = true;
  intervalId = setInterval(() => {
    secondsElement.textContent = remainingTime;
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    if (remainingTime == 5) {
      showToast("Start the engines! 💥");
    }
    if (remainingTime === 0) {
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
      clearInterval(intervalId);
      return;
    }
    remainingTime--;
  }, 500);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastMessage.innerHTML = message;
  toast.classList.toggle("show");
  timeOutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  x.addEventListener("click", function () {
    toast.classList.remove("show");
  });
  // Your code goes here ...
}

//iteration 5
//timeOut look at how to implement
