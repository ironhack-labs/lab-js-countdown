const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  let countdownTime = document.getElementById("time")
  remainingTime = DURATION;
  countdownTime.textContent = remainingTime;
  startButton.disabled = true;
  showToast(remainingTime);
  timer = setInterval(() => {
    remainingTime--;
    showToast(remainingTime);
    countdownTime.textContent = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(timer);
      startButton.disabled = false;
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  let toastDiv = document.getElementById("toast");
  let toastMessage = document.getElementById("toast-message")
  switch (message) {
    case 10:
      toastMessage.textContent = "⏰ Final countdown! ⏰"
      break;
    case 5:
      toastMessage.textContent = "Start the engines! 💥"
      break;
    case 0:
      toastMessage.textContent = "Lift off! 🚀"
      break;
    default:
      return;
      
  }

  toastDiv.classList.add("show");
  setTimeout (() => toastDiv.classList.remove("show"), 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  let closeToast = document.getElementById("close-toast");
  closeToast.addEventListener("click", () => {
    if (toastMessage.textContent === "Lift off! 🚀") {
      clearInterval(timer);
    }
    toastDiv.classList.remove("show")
  });
}
