const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
const timeShown = document.getElementById("time");

function startCountdown(num) {
  //console.log("startCountdown called!");
  document.getElementById("start-btn").disabled = true;
  timer = setInterval(() => {
    timeShown.innerHTML = remainingTime;
    remainingTime -= 1;

    if (remainingTime <= 0) {
      clearInterval(timer);
      timeShown.innerHTML = 0;
      console.log(showToast());
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast() {
  //console.log("showToast called!");
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

const closeButton = document.getElementById("close-toast");

closeButton.addEventListener("click", function () {
  const toast = document.getElementById("toast");

  clearTimeout(timeoutID);

  toast.classList.remove("show");
});
