const DURATION = 10; // 10 seconds
let remainingTime = DURATION;
let timer = null;



// ITERATION 1
const startBtn = document.querySelector("#start-btn");
const toast = document.querySelector("#toast");
const closeBtn = document.querySelector("#close-toast");
const toastMessage = document.querySelector("#toast-message");
const timeDisplay = document.querySelector("#time");

let toastTimeout = null;



startBtn.addEventListener("click", () => {
  startCountdown();
});



// ITERATION 2
function startCountdown() {
  console.log("startCountdown called!");

  clearInterval(timer);

  remainingTime = DURATION;
  timeDisplay.textContent = remainingTime;

  timer = setInterval(() => {
    console.log(remainingTime);

    timeDisplay.textContent = remainingTime;

    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(timer);
    }

    remainingTime--;
  }, 1000);
}



// ITERATION 3
function showToast(message) {
  console.log("showToast called!");

  toastMessage.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
    toastTimeout = null;
  }, 3000);
}



// ITERATION 4
closeBtn.addEventListener("click", () => {
  if (toastTimeout) {
    clearTimeout(toastTimeout);
    toastTimeout = null;
  }
  toast.classList.remove("show");
});