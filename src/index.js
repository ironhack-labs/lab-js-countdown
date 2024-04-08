const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  remainingTime = DURATION; // Reset remainingTime
  document.querySelector('#time').innerHTML = remainingTime;

  timer = setInterval(() => {
    remainingTime--;
    document.querySelector("#time").innerHTML = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      console.log("Countdown finished!");
      showToast("Lift off! 🚀");
    }
  }, 1000); // Timer interval: 1 second
}

// ITERATION 3: Show Toast (Implement showToast function)
function showToast(message) {
  console.log("showToast called!");
  const toastCard = document.querySelector('#toast');
  toastCard.classList.add('show'); // Add the "show" class to make the toast visible
  const toastMsg = document.querySelector('#toast-message');
  toastMsg.innerHTML = message;

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', () => {
    toastCard.style.visibility = "hidden";
  });
}
