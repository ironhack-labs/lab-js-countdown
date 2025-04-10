const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer; // Variable to store the interval
const timeDiv = document.getElementById("time");
const toastDiv = document.getElementById("toast");
const closeToastButton = document.getElementById("close-toast");


// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const sButton = document.getElementById("start-btn");
sButton.addEventListener("click", startCountdown)


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  if (timer) {
    clearInterval(timer)
  }
  timer = setInterval(function () {
    remainingTime--;
    timeDiv.innerText = remainingTime;
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(timer);
    }
  }, 1000)

}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastDiv.classList.add("show");
  toastDiv.innerText= message;

  setTimeout(() => {
    toastDiv.classList.remove("show")
  }, 3000)

}
// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
closeToastButton.addEventListener("click", function () {

  clearInterval(timer);
  toast.classList.remove("show");
  remainingTimeForToast = 3;
});
