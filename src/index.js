const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
  startButton.disabled = "true";
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const intervalId = setInterval(() => {
    if (remainingTime < 0) {
      clearInterval(intervalId);
      showToast('Lift off! 🚀');
    } 
    else if (remainingTime === 5){
      showToast('Start the engines! 💥');
      document.getElementById("time").innerText = remainingTime;
      remainingTime -= 1;
      }
      else if (remainingTime === 10){
        showToast('⏰ Final countdown! ⏰');
        document.getElementById("time").innerText = remainingTime;
        remainingTime -= 1;
        }
    else {
      document.getElementById("time").innerText = remainingTime;
      remainingTime -= 1;
    }
  }, 1000);

}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  const toast = document.querySelector(".toast");
  document.getElementById('toast-message').innerText =message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToast = document.getElementById("close-toast");
  closeToast.addEventListener("click", () => {
    toast.classList.remove("show");
  });
}
