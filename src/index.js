const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const timeDisplay = document.querySelector("#time");
const startBtn = document.querySelector("#start-btn");
const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const closeToast = document.querySelector("#close-toast");

let toastTimeout = null;


// ITERATION 1: Add event listener to the start button
startBtn.addEventListener("click", function() {
  startCountdown();
});




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startBtn.disabled = true;

  // show first toast when countdown starts
  showToast("⏰ Final countdown! ⏰");

  timer = setInterval(function() {
    remainingTime--;
    timeDisplay.textContent = remainingTime;

    // show toast at 5 seconds
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toastMessage.textContent = message;
  toast.classList.add("show");

  // hide the toast after 3 seconds
  toastTimeout = setTimeout(function() {
    toast.classList.remove("show");
  }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToast.addEventListener("click", function() {
    clearTimeout(toastTimeout);
    toast.classList.remove("show");
  });

}
