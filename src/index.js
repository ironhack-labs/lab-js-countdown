const DURATION = 10; // Countdown starting from 10
let timer = null; // Variable to store the interval

const timeElement = document.getElementById("time");
const button = document.getElementById("start-btn");

function startCountdown() {
  let count = DURATION;
  timeElement.textContent = count;
  button.disabled = true;

  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    count--;
    timeElement.textContent = count;
    if (count <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

const toast = document.getElementById("toast");
const closeToast = document.getElementById("close-toast");
function showToast(message) {
  document.getElementById("toast-message").textContent = message;
  toast.classList.add("show");

  setTimeout(() => toast.classList.remove("show"), 4000);
}

button.addEventListener("click", startCountdown);

closeToast.addEventListener("click", () => toast.classList.remove("show"));
