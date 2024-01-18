let DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let intervalID;
// ITERATION 1: Add event listener to the start button

// Your code goes here ...

//startButton = document.querySelectorAll("start-btn");

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => startCountdown());
timer = document.getElementById("time");
// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");

  intervalID = setInterval(function () {
    if (DURATION >= 0) {
      timer.innerHTML = DURATION;
      document.getElementById("start-btn").disabled = true;
      DURATION--;
    } else {
      showToast();
    }
  }, 1000);

  // Your code goes here ...
}
let showClass = document.querySelector("div#toast");
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  showClass.classList.add("show");

  setTimeout(() => {
    showClass.classList.remove("show");
  }, 3000);

  //showClass.classList.remove("show");
  //showClass.classList.remove("toast");
}
// Your code goes here ...

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
