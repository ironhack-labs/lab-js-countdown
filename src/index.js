const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
  //startButton.removeEventListener("click", () => {});
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  function resetTimer() {
    remainingTime = 10;
    document.querySelector("#time").innerText = remainingTime;
    startButton.addEventListener("click");
  }

  // Your code goes here ...
  const interval = setInterval(() => {
    remainingTime--;

    document.querySelector("#time").innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(interval);
      showToast();
      setTimeout(resetTimer(), 3000);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toast.classList.add("show");

  function CloseToast() {
    toast.classList.remove("show");
    console.log("toast removed");
  }
  setTimeout(CloseToast, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...
  const CloseToastButton = document.querySelector("#close-toast");
  CloseToastButton.addEventListener("click", () => {
    toast.classList.remove("show");
    console.log("toast removed");
  });
}
