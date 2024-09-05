const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let startButtonNode = document.querySelector("#start-btn");
let timeNode = document.querySelector("#time");
const toastClassList = toast.classList;
let closeToastNode = document.querySelector("#close-toast");
let toastMessageNode = document.querySelector("#toast-message");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButtonNode.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...

  timer = setInterval(() => {
    remainingTime--;
    timeNode.innerText = remainingTime;
    startButtonNode.disabled = true;
    if (remainingTime >= 9) {
      showToast();
    }
    if (remainingTime === 5) {
      showToast();
    }
    if (remainingTime <= 0) {
      showToast();
      clearInterval(timer);
    }
  }, 1000);
}

// ITERATION 3: Show Toast

// Your code goes here ...

function showToast(message) {
  if (remainingTime >= 9) {
    toastMessageNode.innerText = "⏰ Final countdown! ⏰";
    toastClassList.toggle("show");
    setTimeout(() => {
      toastClassList.remove("show");
    }, 3000);
  }
  if (remainingTime === 5) {
    toastMessageNode.innerText = "Start the engines! 💥";
    toastClassList.toggle("show");
    setTimeout(() => {
      toastClassList.remove("show");
    }, 3000);
  }
  if (remainingTime <= 0) {
    toastMessageNode.innerText = "Lift off! 🚀";
    toastClassList.toggle("show");
    setTimeout(() => {
      toastClassList.remove("show");
    }, 3000);
  }
  console.log("showToast called!");

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  closeToastNode.addEventListener("click", () => {
    toastClassList.remove("show");
  });
}
