const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.querySelector('#start-btn');
const time = document.querySelector('#time');
const toastCard = document.querySelector('#toast');
const closeToastBtn = document.querySelector('#close-toast');

startButton.addEventListener('click', () => {
  startCountdown();
});





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  let timer = setInterval(setTimer ,1000);
  let counter = 10;
  function setTimer() {
    counter --;
    time.innerHTML = counter;
    startButton.disabled = true
    if (counter <= 0) {
      clearInterval(timer);
      showToast();
      counter = 10;
      time.innerHTML = counter;
      startButton.disabled = false;
    }
  }
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastCard.classList.add('show');
  const timeOut = setTimeout(() => {
    toastCard.classList.remove('show');
  }, 3000);

  




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToastBtn.addEventListener('click', () => {
    clearTimeout(timeOut);
    toastCard.classList.remove('show');
  });
}
