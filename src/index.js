const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector("#start-btn"); //accessing the start button by its id
startButton.addEventListener("click", startCountDown);

// ITERATION 2: Start Countdown
function startCountDown() {
  const timeElement = document.querySelector("#time");
  const button = document.querySelector("#start-btn");
  button.disabled = true;

  timer = setInterval(() => {
    timeElement.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast(" Lift off! 🚀");
    }

    // BONUS: ITERATION 5: More Toasts
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
  
    // IMPORTANT: Remember to decrement the remaining time on each interval
    remainingTime--;
    
  }, 1000);

}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
    const toast = document.getElementById('toast'); // Get the toast card element
    const toastMessage = document.getElementById('toast-message');
    toastMessage.innerText = message;
    toast.classList.add('show');
    setTimeout(function() {
      toast.classList.remove('show');
    }, 3000);
  }





