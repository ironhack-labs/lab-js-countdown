const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn")

startButton.addEventListener('click', () => {
  startCountdown();
  startButton.disabled = true;
})



// ITERATION 2: Start Countdown
function startCountdown() {

  // Your code goes here ...
  const time = document.querySelector('div#time')

  const intervalId = setInterval(() => {
    if (remainingTime == 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    if (remainingTime == 5) {
      showToast("Start the engines! 💥");
    }

    remainingTime--;
    time.innerText = remainingTime;

    if (remainingTime < 0) {
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}



// ITERATION 3: Show Toast

function showToast(message) {

  // Your code goes here ...
  const toastMessage = document.querySelector("div#toast");

  toastMessage.classList.add('show');

  setTimeout(() => {
    toastMessage.classList.remove('show');
  }, 3000)



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToast = document.querySelector("#close-toast");
  closeToast.addEventListener('click', () => {
    toastMessage.classList.remove('show');
  })


  // BONUS: ITERATION 5

  const toastText = document.querySelector("#toast-message")
  toastText.innerText = message;
}
