const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const timeCounter = document.querySelector("#time");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
// Your code goes here ...
function startCountdown() {
  console.log("startCountdown called!");
  let counter = 10;
  startButton.disabled = true; 
  let myTimer = setInterval(function () {
    counter--;
    timeCounter.innerText = `${counter}`;
    startButton.disabled = true;
    console.log(counter);

    if (counter === 0) {
      clearInterval(myTimer);
      // timeCounter.innerText = `10`;
      showToast(); 
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
  toast = document.querySelector("#toast");
  toast.classList.add("show");
  let toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
}

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  closeToastButton = document.querySelector("#close-toast");
  closeToastButton.addEventListener("click", closeToast);

  function closeToast() {
    toast.classList.remove("show");

  }

  // Your code goes here ...

