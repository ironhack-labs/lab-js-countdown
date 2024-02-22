const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timer2 = null;
document.querySelector("#time").innerText = DURATION;
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  startBtn.disabled = true;
  console.log("startCountdown called!");
  timer = setInterval(() => {
    document.querySelector("#time").innerText = remainingTime;

    switch (remainingTime) {
      case 10:
        showToast("⏰ Final countdown! ⏰");
        break;
      case 5:
        showToast("Start the engines!💥");
        break;
      case 0:
        showToast("Lift off! 🚀");
        clearInterval(timer);
        startBtn.disabled = false;
        break;
    }
    remainingTime--;
  }, 1000);
  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toastMessage = document.querySelector("#toast-message");
  toastMessage.innerText = message;

  toast.classList.add("show");

  timer2 = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeToastBtn = document.querySelector("#close-toast");

  closeToastBtn.addEventListener("click", () => {
    clearTimeout(timer2);
    toast.classList.remove("show");
  });
  // Your code goes here ...
}
