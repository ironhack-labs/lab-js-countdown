const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

let timeRemain = document.querySelector("div#time");
// Your code goes here ...
let strButton = document.getElementById("start-btn");
strButton.addEventListener("click", () => {
  console.log(remainingTime);
  if (remainingTime === 0) {
    remainingTime = DURATION;
    return startCountdown();
  }
  return startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  let cnt = 0;
  const intervalId = setInterval(() => {
    strButton.disabled = true;
    remainingTime--;
    console.log(remainingTime);
    if (remainingTime > 5) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime > 0) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
      strButton.disabled = false;
    }
    timeRemain.textContent = remainingTime;
  }, 1000);
  console.log("startCountdown called!");

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  let toastMessage = document.querySelector("div#toast");
  let closeToast = document.querySelector("span#close-toast");

  closeToast.addEventListener("click", () => {
    return toastMessage.classList.remove("show");
  });

  let toastMessageContent = document.getElementById("toast-message");
  toastMessageContent.textContent = message;
  console.log(toastMessageContent);

  toastMessage.classList.add("show");

  setTimeout(() => {
    toastMessage.classList.remove("show");
  }, 10000);
}
