const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", function() {
  console.log("Start button clicked!");
  startCountdown();
});




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


const timerElement = document.querySelector("#time");
startButton.disabled = true;
timer = setInterval(function() {
  remainingTime = remainingTime - 1;
  timerElement.innerText = remainingTime;
  if (remainingTime === 0) {
    clearInterval(timer);
    showToast();
  }

  if (remainingTime === 5) {
    showToast("Start the engines! 💥");
  }
}, 1000);

  showToast("⏰ Final countdown! ⏰");

}




// ITERATION 3: Show Toast
function showToast(message = "Lift off! 🚀") {
  console.log("showToast called!");

const toastElement = document.querySelector("#toast");
const toastMessageElement = toastElement.querySelector("#toast-message");
toastMessageElement.innerText = message;
toastElement.classList.add("show");
const toastTimer = setTimeout(function() {
  toastElement.classList.remove("show");
}, 3000);





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

const closeButton = toastElement.querySelector("#close-toast");
closeButton.addEventListener("click", function() {
  clearTimeout(toastTimer);
  toastElement.classList.remove("show");
});

}
