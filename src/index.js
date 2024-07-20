const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  const intervalId = setInterval(function () {
    document.querySelector("#start-btn").disabled = true;
    if (remainingTime >= 0) {
      console.log(remainingTime);
      let realCountdown = document.getElementById("time");
      realCountdown.textContent = remainingTime;
    } else {
      clearInterval(intervalId);
      showToast(0);
    }
    if (remainingTime === 10) {
      showToast(10);
    }
    if (remainingTime === 5) {
      showToast(5);
    }
    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast

function showToast(message) {
  if (message === 10) {
    let fetchToast = document.getElementById("toast-message");
    fetchToast.textContent = "⏰ Final countdown! ⏰";
  }

  if (message === 5) {
    let fetchToast = document.getElementById("toast-message");
    fetchToast.textContent = "Start the engines! 💥";
  }

  if (message === 0) {
    let fetchToast = document.getElementById("toast-message");
    fetchToast.textContent = "Lift off! 🚀";
  }
  console.log("showToast called!");
  let fetchToast = document.getElementById("toast");
  const list = fetchToast.classList;

  list.add("show");
  const closeButton = document.querySelector("#close-toast");
  closeButton.addEventListener("click", () => {
    list.remove("show");
    threeSeconds.clearInterval;
  });

  const threeSeconds = setTimeout(() => {
    list.remove("show");
  }, 3000);
  threeSeconds;

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
