const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () =>  {
  startCountdown();
});




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  startButton.disabled = true;

  timer = document.getElementById("time");

  const intervalId = setInterval(function() {
    if (remainingTime === 10 || remainingTime === 5 || remainingTime === 0) {
      showToast(remainingTime);
    }
    
    timer.innerText = remainingTime;
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  if (message === 10) {
    toastMessage.innerText = "⏰ Final countdown! ⏰";
  } else if (message === 5) {
    toastMessage.innerText = "Start the engines! 💥";
  } else if (message === 0) {
    toastMessage.innerText = "Lift off! 🚀";
  }

  toast.classList.toggle("show");

  setTimeout(function() {
    toast.classList.remove("show");
  }, 3000)



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeButton = toast.querySelector("#close-toast");
  closeButton.addEventListener("click", () => toast.remove());
}
