const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let messageToast = "";

// ITERATION 1: Add event listener to the start button

let startButtonId = document.querySelector("#start-btn");
startButtonId.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  startButtonId.disabled = true;

  // Your code goes here ...
  timer = setInterval(() => {
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;
      showToast("Lift off! 🚀");
      startButtonId.disabled = false;
    }
    document.querySelector("#time").innerText = remainingTime;
    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast

let toastId = document.querySelector("#toast");
let toastMessageId = document.querySelector("#toast-message");
let toastCloseId = document.querySelector("#close-toast");

function showToast(message) {
  toastId.classList.add("show");
  toastMessageId.innerText = `${message}`;

  setTimeout(() => {
    toastId.classList.remove("show");

    if (message === "Lift off! 🚀") {
      resetCountdown();
    }
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  toastCloseId.addEventListener("click", () => {
    toastId.classList.remove("show");
    if (message === "Lift off! 🚀") {
      resetCountdown();
      message = "⏰ Final countdown! ⏰";
    }
   
  });
}

function resetCountdown() {
  clearInterval(timer);
  remainingTime = DURATION; // Countdown starting from 10
  timer = null;
  startButtonId.disabled = false;
  document.querySelector("#time").innerText = remainingTime;
}
