const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimer = null;



// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => startCountdown());

const time = document.getElementById("time");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const closeToast = document.getElementById("close-toast");


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startButton.disabled = true;

  timer = setInterval(() => {
    if (remainingTime > 0) remainingTime--;
    time.textContent = remainingTime;

    if (remainingTime >= 9) {
      showToast("⏰ Final countdown! ⏰");

    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");

    } else if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(countdownTimer);
      startButton.disabled = false;
    }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toast.classList.add("show")

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000)

  // BONUS 4: Add click event to the close button
  closeToast.addEventListener("click", () => {
    clearTimeout(toastTimer);
    toast.classList.remove("show")
  })


  //BONUS 5: More Toasts
  toastMessage.textContent = message;
}
