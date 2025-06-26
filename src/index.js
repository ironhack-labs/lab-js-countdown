const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const divTime = document.querySelector("#time");
const toast = document.querySelector("#toast");
const closeToast = document.querySelector("#close-toast");
const toastMessage = document.querySelector("#toast-message");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    divTime.innerText = remainingTime;
    switch (remainingTime) {
      case 9:
        showToast("⏰ Final countdown! ⏰");
        break;
      case 5:
        showToast("Start the engines! 💥");
        break;
    }
  }, 1_000);

  setTimeout(() => {
    clearInterval(timer);
    showToast();
  }, 10_000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  if (message === "⏰ Final countdown! ⏰") {
    toastMessage.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2_000);
  }

  if (message === "Start the engines! 💥") {
    toastMessage.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2_000);
  } else {
    toastMessage.innerText = "Lift off! 🚀";
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3_000);
  }

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToast.addEventListener("click", () => {
    toast.classList.remove("show");
  });
}
