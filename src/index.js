const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButtonElement = document.querySelector('#start-btn');
const timeElement =  document.querySelector('#time');
const toastElement = document.querySelector('#toast');
const toastMessageElement = document.querySelector('#toast-message');

document.querySelector('#close-toast').addEventListener('click', () => toastElement.classList.remove('show'));

// ITERATION 1: Add event listener to the start button
// console.log(startButtonElement);
startButtonElement.addEventListener('click', startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  clearInterval(timer);
  remainingTime = 10;
  timeElement.textContent = remainingTime;
  startButtonElement.toggleAttribute('disabled')
  showToast("⏰ Final countdown! ⏰");


  timer = setInterval(()=> {
    remainingTime--;
    if(remainingTime === 0) {
      clearInterval(timer);
      startButtonElement.toggleAttribute('disabled');
      showToast('Lift off! 🚀');
    } else if (remainingTime === 5) showToast("Start the engines! 💥")
    timeElement.textContent = remainingTime;
  }, 1000)
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastMessageElement.textContent = message;
  toastElement.classList.add('show');
  setTimeout(()=>toastElement.classList.remove('show'), 3000);
}
