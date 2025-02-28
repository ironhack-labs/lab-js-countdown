// Timer Logic
const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// HTML Components & Assets
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const toastCloseButton = document.getElementById("close-toast");
const toastMessage = document.getElementById("toast-message");
const audioAlarm = new Audio("./assets/biohazard-alarm-143105.mp3");
const audioTicking = new Audio("./assets/ticking-timer-65220.mp3");

//* ITERATION 1: Add event listener to the start button
// Your code goes here ...

startButton.addEventListener("click", () => {
  startCountdown();
});

//* ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...

  // Before the Timer
  audioAlarm.pause();
  audioTicking.play();
  remainingTime = DURATION;
  startButton.disabled = true;
  timerElement.innerText = remainingTime;
  toastMessage.innerText = "⏰ Final countdown! ⏰";
  showToast();

  // During Timer
  timer = setInterval(() => {
    remainingTime--;
    timerElement.innerText = remainingTime;
    if (remainingTime === 5) {
      toastMessage.innerText = "Start the engines! 💥";
      showToast();
    }

    // At the end of the timer
    if (remainingTime === 0) {
      clearInterval(timer);
      toastMessage.innerText = "Lift off! 🚀";
      startButton.disabled = false;
      audioTicking.pause();
      audioAlarm.play();
      showToast();
      startButton.innerText = "Restart Countdown";
    }
  }, 1000);
}

//* ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Closing Button
  toastElement.style.visibility = "visible";
  // Close Button
  toastCloseButton.addEventListener("click", () => {
    toastElement.style.visibility = "hidden";
  });
  // Timers
  setTimeout(() => {
    toastElement.style.visibility = "hidden";
  }, 3000);

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
