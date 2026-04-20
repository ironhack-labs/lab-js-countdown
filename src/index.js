const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startButton = document.querySelector("#start-btn");
const timeDy = document.getElementById("time");
const toastMes = document.querySelector("#toast");
//const startButton = document.querySelector("#start-btn");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  //console.log("startCountdown called!");
  //let num = 10;
  timer = setInterval(() => {
    remainingTime--;
    startButton.disabled = true;
    timeDy.textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("your time is up");
    }
  }, 1000);

  /*setTimeout(() => {
    clearInterval(intervalId);
  }, 15000);*/
}

// Your code goes here ...

// ITERATION 3: Show Toast
function showToast(message) {
  toastMes.textContent = message;
  toastMes.classList.add("show");
  //console.log("showToast called!");
  //toastMes.textContent = message;
  //toastMes.style.display = "block";
  //console.log("toast");
  setTimeout(() => {
    toastMes.classList.remove("show");
  }, 3000);

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
