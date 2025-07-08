const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", () => {
  if (startButton.innerHTML === "Start Countdown") {
    startCountdown();
    showToast("Lift off!");
    startButton.innerHTML = "Counting...";
    startButton.disabled = true;
  } else {
    clearInterval(timer);
    remainingTime = DURATION;
    document.querySelector("#time").innerHTML = remainingTime;
    startButton.innerHTML = "Start Countdown";
    startButton.disabled = false;
  }
});

function startCountdown() {
  timer = setInterval(() => {
    remainingTime--;
    document.querySelector("#time").innerHTML = remainingTime;

    if (remainingTime === 5) {
      showToast("almost there!");
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      startButton.innerHTML = "Reset";
      startButton.disabled = false;
      showToast("Time's up!");
    }
  }, 1000); // 1 second
  console.log("startCountdown called!");
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.querySelector("#toast");
  toast.classList.toggle("show");
  toast.querySelector(`#toast-message`).innerHTML = message;
  setTimeout(() => {
    toast.classList.toggle("show");
  }, 3000); // 3 seconds

  const closeButton = document.querySelector("#close-toast");
  closeButton.addEventListener("click", () => {
    toast.classList.toggle("show");
  });

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
