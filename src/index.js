const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// HTML elements
const startButton = document.getElementById("start-btn");
const time = document.getElementById("time");

// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Disable the start button
  startButton.disabled = true;

  // Start the interval
  timer = setInterval(() => {

    remainingTime--; // decrease time
    time.innerText = remainingTime; // update UI

    // Show different toast messages at different times
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    // When time reaches 0 → stop timer + show toast
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }

  }, 1000); // run every 1 second
}



// ITERATION 3 + BONUS: Show Toast (with dynamic message + close button)
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  const closeButton = document.getElementById("close-toast");

  // 1. Update the toast message
  toastMessage.innerText = message;

  // 2. Show the toast
  toast.classList.add("show");

  // 3. Hide automatically after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: Close button manually hides the toast
  closeButton.addEventListener("click", () => {
    toast.classList.remove("show");
  });
}
