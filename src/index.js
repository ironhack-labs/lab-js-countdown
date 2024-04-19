const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


// ITERATION 1: Add event listener to the start button
// Your code goes here ...
document.querySelector("#start-btn").addEventListener("click", startCountdown);
document.querySelector("#close-toast").addEventListener("click", () => {
  document.querySelector("#toast").classList.remove("show")
});


// ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...
  document.querySelector("#start-btn").disabled = true;
  const timer = setInterval(() => {
    console.log(remainingTime);
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      showToast("Lift off! 🚀");
    };
    document.querySelector("#time").innerHTML = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
    };
    remainingTime--;
  }, 1000);
};


// ITERATION 3: Show Toast
function showToast(message) {
  // Your code goes here ...
  document.querySelector("#toast-message").innerHTML = message;
  document.querySelector("#toast").classList.add("show");
  setTimeout(() => {
    document.querySelector("#toast").classList.remove("show");
  }, 3000)
};
