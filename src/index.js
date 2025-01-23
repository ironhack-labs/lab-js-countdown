const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const buttonStartCountdown = document.querySelector("#start-btn");
buttonStartCountdown.onclick = () => {
  startCountdown()
}

// ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...
  document.getElementById('start-btn').disabled = true;
  let timeInterval = document.querySelector("#time")

  const intervalId = setInterval(() => {

    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰")
    }
    else if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    } else if (remainingTime === 0) {

      showToast("Lift off! 🚀");
      clearInterval(intervalId);
    }
    if (remainingTime >= timer) {
      timeInterval.innerText = `${remainingTime}`
    }
    remainingTime--;

  }, 1000);

}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById('toast');

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);

  const toastClose = document.getElementById('close-toast');
  toastClose.onclick = () => toast.classList.remove('show')

  const messageStart = document.getElementById('toast-message')
  messageStart.innerText = message

 }
