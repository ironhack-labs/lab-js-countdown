const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
const timeElement = document.getElementById("time");

function startCountdown() {
  console.log("startCountdown called!");

  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    
    timeElement.textContent = remainingTime;

    if (remainingTime >= 9) {
      showToast();
    } else if (remainingTime === 5) {
      showToast();
    } else if (remainingTime <= 0) {
      clearInterval(timer);
      timeElement.textContent = "0";
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");
  toast.classList.add("show");

  const toastMessage = document.getElementById("toast-message");

  if (remainingTime >= 9) {
    toastMessage.innerText = "⏰ Final countdown! ⏰";
  } else if (remainingTime === 5) {
    toastMessage.innerText = "Start the engines! 💥";
  } else if (remainingTime <= 0) {
    toastMessage.innerText = "Lift off! 🚀";
  }

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const close = document.getElementById("close-toast");

  close.addEventListener("click", () => {
    toast.classList.remove("show");
  })
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
