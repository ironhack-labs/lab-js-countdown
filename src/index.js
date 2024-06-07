const DURATION = 2; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
document.querySelector("#start-btn").addEventListener("click", function () {
  startCountdown();
});
// Your code goes here ...

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const timeElement = document.querySelector("#time");
  timer = setInterval(() => {
    timeElement.textContent = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toastElement = document.querySelector("#toast");
  toastMessage = document.querySelector("#toast-message");
  toastElement.classList.add("show");
  toastMessage.textContent = message;
  const timeOut = setInterval(() => {
    toastElement.classList.remove("show");
  }, 3000);
 
}
