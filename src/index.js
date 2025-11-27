// DOM manipulation

const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startButtonElement = document.getElementById("start-btn");
startButtonElement.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown

function startCountdown() {
  document.getElementById("start-btn").disabled = true;
  document.getElementById("time").innerText = remainingTime;

  timer = setInterval(() => {
    remainingTime--;
    console.log("startCountdown called!");

    document.getElementById("time").innerText = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.getElementById("toast");

  toast.classList.add("show");

  console.log("showToast called!");

  if (toast === 0) {
    toastElement.style.display = "block";
    setTimeout(() => {
      toString.classList.remove("show");
    }, 3000);
  }

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeBtn = document.getElementById("close-toast");

  closeBtn.addEventListener("click", () => {
    clearTimeout("close-toast");
    toast.classList.remove("show");
  });
}

