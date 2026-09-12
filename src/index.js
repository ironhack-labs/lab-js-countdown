const DURATION = 10; // 10 seconds

let remainingTime = DURATION; // Countdown starting from 10

let timer = null; // Variable to store the interval

let toastTimeout = null; // Variable to store the toast timeout



// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown

function startCountdown() {

  console.log("startCountdown called!");

  startButton.disabled = true;

  remainingTime = DURATION;

  const time = document.querySelector("#time");

  time.textContent = remainingTime;

  // BONUS: ITERATION 5: More Toasts
  showToast("⏰ Final countdown! ⏰");

  timer = setInterval(() => {

    remainingTime--;

    time.textContent = remainingTime;

    // BONUS: ITERATION 5: More Toasts
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0) {

      clearInterval(timer);

      timer = null;

      startButton.disabled = false;

      // ITERATION 3: Show Toast
      showToast("Lift off! 🚀");
    }

  }, 1000);
}




// ITERATION 3: Show Toast

function showToast(message) {

  console.log("showToast called!");

  const toast = document.querySelector("#toast");

  const toastMessage = document.querySelector("#toast-message");

  toastMessage.textContent = message;

  toast.classList.add("show");

  toastTimeout = setTimeout(() => {

    toast.classList.remove("show");

    toastTimeout = null;

  }, 3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeToast = document.querySelector("#close-toast");

  closeToast.onclick = () => {

    clearTimeout(toastTimeout);

    toastTimeout = null;

    toast.classList.remove("show");

  };
}