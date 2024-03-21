const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);

const closeButton = document.querySelector("#close-toast");
closeButton.addEventListener("click", function () {
  document.querySelector("#toast").classList.remove("show");
  clearTimeout(timer);
  console.log("button X clicked!");
});

document.querySelector("#time").innerText = DURATION;
remainingTime = DURATION - 1;

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  document.querySelector("#start-btn").disabled = true;
  showToast("⏰ Final countdown! ⏰");

  const downCounter = setInterval(function () {
    if (remainingTime > 0) {
      document.querySelector("#time").innerText = remainingTime;
      if (remainingTime === 5) {
        showToast("Start the engines! 💥");
      }
      remainingTime--;
    } else {
      document.querySelector("#time").innerText = remainingTime;
      console.log("Reaching 0");
      clearInterval(downCounter);
      showToast("Lift off! 🚀");
      console.log("after showToast");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  const toast = document.querySelector("#toast");
  toast.classList.add("show");
  document.querySelector("#toast-message").textContent = message;

  timer = setTimeout(function () {
    toast.classList.remove("show");
    console.log("toast timeout called!");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
