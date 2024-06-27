const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let buttonNode = document.querySelector("#start-btn");

buttonNode.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  let timerNode = document.querySelector("#time");
  remainingTime = DURATION;

  let interval1 = setInterval(() => {
    document.getElementById("start-btn").disabled = true;
    remainingTime--;
    timerNode.innerText = remainingTime;

    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    if (remainingTime === 0) {
      clearInterval(interval1);
      showToast("Lift off! 🚀");
      document.getElementById("start-btn").disabled = false;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  document.querySelector("#toast-message").innerText = message; 
  let toastClass = document.querySelector(".toast");
  toastClass.classList.add("show");

  setTimeout(() => toastClass.classList.remove("show"), 3000);

  let xBtn = document.querySelector("#close-toast");
  xBtn.addEventListener("click", () => {
    toastClass.classList.remove("show");
   
  });
}
