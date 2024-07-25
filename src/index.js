const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const button = document.querySelector('button');
const countdownDisplay = document.getElementById("time");

button.addEventListener("click", function () {
  startCountdown();
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  remainingTime = 10;
  countdownDisplay.textContent = remainingTime;

  countdownInterval = setInterval(() => {
    button.disabled = true;
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }

    if (remainingTime === 6) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      showToast("Lift off! 🚀");
      return;
    }

    remainingTime--;
    countdownDisplay.textContent = remainingTime;

  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const div = document.querySelector('.toast');
  const toastMessage = document.getElementById('toast-message');
  toastMessage.textContent = message;
  div.classList.add('show')
  setTimeout(() => div.classList.remove("show"), 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeButton = document.getElementById("close-toast");
  // Your code goes here ...

  closeButton.addEventListener('click', function () {
    div.classList.remove("show");
  });

}
