const DURATION = 11; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButton = document.getElementById("start-btn");
const timeElement = document.getElementById("time");

// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", () => {
  startCountdown();
});
function startCountdown() {
  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    console.log("Hello", remainingTime);
    if (remainingTime === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// ITERATION 2: Start Countdown

// ITERATION 3: Show Toast
function showToast(message = "¡Vámonos!🚀") {
  console.log("showToast called!");

  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
document.getElementById("close-toast").addEventListener("click", () => {
  document.getElementById("toast").classList.remove("show");
});
if (count === 0) {
  showToast();
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
