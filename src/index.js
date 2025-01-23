const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const showTimer = document.getElementById("time");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startbtn = document.getElementById("start-btn");
startbtn.addEventListener("click", function () {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  const intervaltest = setInterval(function () {
    showTimer.textContent = remainingTime;
    remainingTime--;
    startbtn.style.display = "none";

    if (remainingTime < 0) {
      clearInterval(intervaltest);
      startbtn.style.display = "inline";
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToast = document.getElementById("close-toast");
  closeToast.addEventListener("click", function () {
    toast.classList.remove("show");
  });
}
