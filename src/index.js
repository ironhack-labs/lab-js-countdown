const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// const countElement = document.querySelector("#count")
const timeElement = document.querySelector("#time");
const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const closeToast = document.querySelector("#close-toast");

const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");
  timeElement.innerText = `${remainingTime}`;
  startBtn.disabled = true;

  timer = setInterval(() => {
 
    remainingTime--;
    timeElement.innerText = `${remainingTime}`;

    if (remainingTime === 0) {
      clearInterval(timer);
      startBtn.disabled = false;
      showToast("Lift off! 🚀");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
  }, 1000);
  return timer;
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");

  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToast.addEventListener("click", () => {
    toast.classList.remove("show");
  });

  toastMessage.innerText = `${message}`
}
