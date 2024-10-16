const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeout;

// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", function () {
  startCountdown();
});

// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");

  document.getElementById("time").innerText = remainingTime;

  countdown = setInterval(function () {
    remainingTime--;

    document.getElementById("time").innerText = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(countdown);
      showToast();
      startButton.disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");


  toast.classList.add("show");


  setTimeout(function () {

    toast.classList.remove("show");
  }, 3000);
}



function hideToast() {
  const toast = document.getElementById("toast");
  toast.classList.remove("show"); 
}

document.getElementById("close-toast").addEventListener("click", function () {
  clearTimeout(toastTimeout); 
  hideToast(); // 
});
