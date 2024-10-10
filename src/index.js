const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const buttonStart = document.getElementById("start-btn");
buttonStart.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  //console.log("startCountdown called!");

  // Your code goes here ...
  timer = setInterval(function () {
    if (remainingTime > 0) {
      remainingTime--;
      let timerNum = document.getElementById("time");
      timerNum.innerText = `${remainingTime}`;
    } else {
      clearInterval(timer);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
  if ((remainingTime = 0)) {
    const toastMessage = document.querySelector("div.toast");
    toastMessage.setTimeout(() => {
      toastMessage.classList.toggle("show");
    }, 3000);
  }

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
