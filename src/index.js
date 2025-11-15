const DURATION = 10;
let remainingTime = DURATION;
let timer = null;


const startButtonElement = document.querySelector('#start-btn');
const timeElement = document.querySelector('#time');
const toastElement = document.querySelector('#toast');
const toastMessageElement = document.querySelector('#toast-message');

// ITERATION 1: Start button triggers startCountdown()
startButtonElement.addEventListener('click', startCountdown);

// ITERATION 2: Start countdown logic
function startCountdown() {
  console.log("startCountdown called!");

  if (timer !== null) return;
  remainingTime = DURATION;
  timeElement.innerText = remainingTime;

  startButtonElement.disabled = true;
  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime; 

    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;
      startButtonElement.disabled = false;
      showToast("Lift off!");
    }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toastMessageElement.innerText = message;
  toastElement.classList.add("show");

  setTimeout(() => {
    toastElement.classList.remove("show");
}, 3000);
}


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

