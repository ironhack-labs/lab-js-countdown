const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButn = document.querySelector("#start-btn");
startButn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  startButn.setAttribute("disabled", "disabled");
  console.log("startCountdown called!");

  // Your code goes here ...
  const timerDisplay = document.querySelector("#time");
  let countStarter = 10;

  function countdown() {
    timerDisplay.textContent = countStarter;
    countStarter--;
    //checks everytime if countStarter is 0 to stop
    if (countStarter < 0) {
      clearInterval(start);
      console.log("Count down reached 0");
      startButn.removeAttribute("disabled");
      showToast();
    }
  }
  const start = setInterval(countdown, 1000);
}

// ITERATION 3: Show Toast

function showToast(message) {
  // Your code goes here ...
  toast = document.getElementById("toast");
  toast.classList.add("show");
  let toastDuration = 3;
  const start = setInterval(toastTimer, 1000);

  function toastTimer() {
    toastDuration--;
    if (toastDuration <= 0) {
      clearInterval(start);
      toast.classList.remove("show");
    }
  }

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
