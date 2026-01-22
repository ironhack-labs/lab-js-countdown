let remainingTime = 10; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown); //triggers the countdown function

// ITERATION 2: Start Countdown
function startCountdown() {
  const timeDiv = document.querySelector("#time"); //Id where the counter is located

  remainingTime = 10;
  timeDiv.textContent = remainingTime; // textContent 'pastes' the remaining time into the div to update it visually

  startButton.disabled = true; //Grays out the button to prevent multiple clicks

 
  //The setInterval function below runs again and again, automatically, every second (1000 milliseconds).

  timer = setInterval(() => {
  remainingTime--;
  timeDiv.textContent = remainingTime;

  if (remainingTime === 9) {
    showToast("⏰ Final countdown! ⏰");
  }

  if (remainingTime === 5) {
    showToast("Start the engines! 💥");
  }

  if (remainingTime === 0) {
    clearInterval(timer);
    showToast("Lift off! 🚀");
  }
}, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.getElementById("toast"); // get the toast ID. JS usually grabs IDs, CSS usually styles classes.
  const toastMessage = document.getElementById("toast-message"); // Go to the toast message ID

  toastMessage.textContent = message;     // set message
  toast.classList.add("show");             // show toast

  setTimeout(() => {
    toast.classList.remove("show");        // hide after 3s
  }, 3000);
}
