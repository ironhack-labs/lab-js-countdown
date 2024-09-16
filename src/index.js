const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeInDOM = document.querySelector("#time")
let toast = document.querySelector(".toast")


// ITERATION 1: Add event listener to the start button

let startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", startCountdown);

function disableBtn() {
  document.querySelector("#start-btn").disabled = true;
}

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  disableBtn()
  timer = setInterval(() => {
    remainingTime -= 1;
    timeInDOM.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
