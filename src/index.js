const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
let startBtn = document.querySelector("#start-btn");
let timeTxt = document.querySelector("#time");

startBtn.addEventListener("click", () => {
  startCountdown();
});
// Your code goes here ...

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  startBtn.style.backgroundColor = "grey";
  let currentTime = parseInt(timeTxt.innerHTML);

  if (currentTime > 0) {
    let timerInterval = setInterval(() => {
      timeTxt.innerHTML = --currentTime;

      if (currentTime === 9 && currentTime >= 6) {
        showToast("Counting Down!!!");
      } else if (currentTime === 5 && currentTime >= 2) {
        showToast("Almost There!!!");
      }
      if (currentTime === 0) {
        clearInterval(timerInterval);
        showToast();
      }
    }, 1000);
  }
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...

  let toast = document.querySelector(".toast");
  let toastMsg = document.querySelector("#toast-message");
  toast.style.display = "block";
  toast.classList.add("show");

  if (message) {
    //more toasts!
    toastMsg.textContent = message;
  } else {
    toastMsg.textContent = "Lift off! 🚀";
  }

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  let closeToastBtn = document.querySelector("#close-toast");
  closeToastBtn.addEventListener("click", () => {
    toast.classList.remove("show");
  });
}
/*
else if (currentTime === 9 && currentTime > 6) {
    toast.style.display = "block";
    toast.classList.add("show");
  }*/
