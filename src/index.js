const DURATION = 10;
let remainingTime = DURATION;
let timer = null;

const timeDisplay = document.querySelector("#time");
const startBtn = document.querySelector("#start-btn");
const toast = document.querySelector("#toast");
const closeBtn = document.querySelector("#close-toast");

startBtn.addEventListener("click", () => {
  if (startBtn.innerText === "Reset") {
    remainingTime = DURATION;
    timeDisplay.innerText = remainingTime;
    startBtn.innerText = "Start";
  } else {
    startCountdown();
  }
});

function startCountdown() {
  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.innerText = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      startBtn.innerHTML = "Reset";
      showToast("Time's up!");
    }
  }, 500);
}

function showToast(message) {
  toast.classList.add("show");
  toast.querySelector("#toast-message").innerHTML = message;
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

closeBtn.addEventListener("click", () => {
  toast.classList.remove("show");
});
