const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;

  showToast("⏰ Final countdown! ⏰");

  timer = setInterval(() => {
    remainingTime--;
    document.getElementById("time").innerHTML = remainingTime;

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

  const toastElement = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;
  toastElement.classList.add("show");

  if (toastTimeout) clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeButton = document.querySelector("#close-toast");
  closeButton.onclick = () => {
    toastElement.classList.remove("show");
    clearTimeout(toastTimeout);
  };
}
