const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.querySelector("#start-btn").addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.querySelector("#start-btn").disabled = true;
  showToast("⏰ Final countdown! ⏰");
  timer = setInterval(() => {
    remainingTime--;
    document.querySelector("#time").innerHTML = remainingTime;

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.querySelector("#toast");
  document.querySelector("#toast-message").innerHTML = message;
  toast.classList.add("show");

  let toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.querySelector("#close-toast").addEventListener("click", () => {
    clearTimeout(toastTimer);
    toast.classList.remove("show");
  });
}
