const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

let time = document.getElementById("time");
const startButton = document.getElementById("start-btn");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const closeToast = document.getElementById("close-toast");

// ITERATION 1: Add event listener to the start button

startButton.onclick = function () {
  startCountdown();
};

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startButton.disabled = true;

  // ITERATION 5: MORE TOASTS
  timer = setInterval(() => {
    remainingTime -= 1;
    switch (remainingTime) {
      case 10:
        showToast("⏰ Final countdown! ⏰");
        break;
      case 5:
        showToast("Start the engines! 💥");
        break;
      case 0:
        showToast("Lift off! 🚀");
        clearInterval(timer);
        break;
    }

    time.innerHTML = remainingTime;

    /*     if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
    } */
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  closeToast.onclick = function () {
    toast.classList.remove("show");
  };

  // ITERATION 5: MORE TOASTS
  toastMessage.innerHTML = message;
}
