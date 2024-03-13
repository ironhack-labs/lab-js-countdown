const DURATION = 10; // 10 seconds
let remainingTime = DURATION;
let timer = null;
let timeoutTimer = null;
const timeElement = document.querySelector("#time");
const toastElement = document.querySelector("#toast");
const closeBtn = document.getElementById("close-toast");
const toastMessageElement = document.getElementById("toast-message");

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});
closeBtn.addEventListener("click", () => {
  console.log("this is the x button");
  toastElement.classList.remove("show");
  clearTimeout(timeoutTimer);
});

function startCountdown() {
  console.log("startCountdown called!");
  showToast("⏰ Final countdown! ⏰");
  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(timer);
    }
  }, 1000);
}


function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add("show");
  toastMessageElement.innerText = message;
  timeoutTimer = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2000);


