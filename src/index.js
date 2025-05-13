const DURATION = 12; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startCountdownBtnElement = document.querySelector("#start-btn");
const timeElement = document.querySelector("#time");
const toastElement = document.querySelector("#toast");
const toastMessageElement = document.querySelector('#toast-message');
const closeToastElement = document.querySelector('#close-toast');

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startCountdownBtnElement.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timeElement.innerText = `${remainingTime}`;
  startCountdownBtnElement.disabled = true;

  // Your code goes here ...

  timer = setInterval(() => {
    

    if (remainingTime === 0) {
      clearInterval(timer);
      startCountdownBtnElement.disabled = false;
      showToast("Lift off! 🚀");
      return;
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }

    remainingTime--;
    timeElement.innerText = `${remainingTime}`;
  }, 1000);
  return timer;
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastElement.classList.add("show");
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToastElement.addEventListener('click', ()=>{
    toastElement.classList.remove('show')
  })

  //BONUS: ITERATION 5: TOAST MESSAGES

  toastMessageElement.innerText = `${message}`;
}
