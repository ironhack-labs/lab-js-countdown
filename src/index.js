const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButton = document.getElementById("start-btn");
const timeContainer = document.getElementById("time");
const toast = document.getElementById("toast");
const closeToastButton = document.getElementById("close-toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButton.addEventListener("click", () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...

  startButton.disabled = true;

  timer = setInterval(() => {
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }

    timeContainer.innerText = remainingTime;
    remainingTime--;
  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toast.querySelector("#toast-message").innerText = message;
  toast.classList.add("show");

  let toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToastButton.addEventListener("click", () => {
    clearTimeout(toastTimer);
    toast.classList.remove("show");
  })

}
