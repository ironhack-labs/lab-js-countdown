const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
const time = document.querySelector("#time")
const toast = document.querySelector(".toast")
const closeToast = document.querySelector("#close-toast")
const toastMsg = document.querySelector("#toast-message");

const toastList = toast.classList;

startBtn.addEventListener("click", startCountdown);

closeToast.addEventListener("click", () => {
  toastList.remove("show");
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  const timerId = setInterval(() => {
    remainingTime--;
    time.innerHTML = remainingTime;
    startBtn.disabled = true;

    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      clearInterval(timerId);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastMsg.innerHTML = message;
  toastList.add("show");
  

  setTimeout(() => {
    toastList.remove("show");
  }, 3000)
}
