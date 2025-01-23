const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  const time = document.getElementById("time");
  startButton.disabled = true;

  const timer = setInterval(() => {
    remainingTime--;
    time.textContent = remainingTime;

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startButton.disabled = false;
      remainingTime = DURATION; 
    }
  }, 1000);
}


// ITERATION 3: Show Toast
   function showToast(message) {
        console.log("showToast called!");

        const toast = document.getElementById("toast");
        const toastMessage = document.getElementById("toast-message");

        toastMessage.textContent = message;
        toast.classList.add("show");

        setTimeout(() => {
          toast.classList.remove("show");
        }, 3000);
      }


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeButton = document.getElementById("close-toast");
  closeButton.addEventListener("click", () => {
    toast.classList.remove("show");
  });


