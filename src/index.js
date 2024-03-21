const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.querySelector("#start-btn").addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {

  // Your code goes here ...
  remainingTime = DURATION;
  document.querySelector("#start-btn").disabled = true;

  const timer = setInterval(() => {
    document.querySelector("#time").innerText = remainingTime;

    if (remainingTime === 10)
      showToast("⏰ Final countdown! ⏰");
    if (remainingTime === 5)
      showToast("Start the engines! 💥");

    if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(timer);
      document.querySelector("#start-btn").disabled = false;
    }
    remainingTime -= 1;
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {

  // Your code goes here ...
  const tostElement = document.querySelector("#toast");
  tostElement.classList.add("show");

  const toastMessage = tostElement.querySelector("#toast-message");
  toastMessage.innerText = message;

  const toastMessageTimeout = setTimeout(() => {
    tostElement.classList.remove("show");
  }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToast = document.querySelector("#close-toast");
  closeToast.addEventListener("click", () => {
    tostElement.classList.remove("show");
    clearTimeout(toastMessageTimeout);
  });
}
