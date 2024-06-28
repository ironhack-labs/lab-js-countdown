const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const button = document.querySelector("#start-btn");
const timerDiv = document.querySelector("#time");
const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const closeButton = document.querySelector("#close-toast");

button.addEventListener("click", () => {
  startCountdown();
  button.disabled = "true";
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  const timer = setInterval(() => {
    timerDiv.innerText = remainingTime;
    console.log(remainingTime);
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Kick off 🚀");
      timer.innerText = DURATION;
      remainingTime = DURATION;
      button.disabled = false;
    }
    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toastMessage.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

closeButton.addEventListener("click", () => {
  toast.classList.remove("show");
});
