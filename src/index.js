const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  startBtn.disabled = true;
  const timer = setInterval(() => {
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰")
    }
    remainingTime--;
    document.getElementById("time").textContent = remainingTime;
 
    if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }
    if (remainingTime === 0) {
      showToast("Lift off! 🚀")
      clearInterval(timer);
    }
  }, 1000);
  console.log("startCountdown called!");

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastCard = document.querySelector("#toast");
  toastCard.classList.add("show");
  const toastMessage = document.querySelector("#toast-message");
  toastMessage.textContent = message;
  setTimeout(() => {
    toastCard.classList.remove("show")
  }, 3000)
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToast = document.querySelector("#close-toast");
  closeToast.addEventListener("click", () => {
    toastCard.classList.remove("show");
  });
}
