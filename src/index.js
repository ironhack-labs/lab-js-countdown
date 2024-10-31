const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let startBtn = document.querySelector('#start-btn');
let time = document.querySelector('#time');
let toastMessage = document.querySelector('#toast')



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtn.addEventListener('click', () => {
  startCountdown();

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // setInterval

startBtn.disabled = true;

let timer = setInterval(() => {
  remainingTime -= 1;
  time.textContent = remainingTime;
  if (remainingTime === 0) {
    clearInterval(timer);
    showToast();
  }
}, 1000);


  // Your code goes here ...
}

});








// ITERATION 3: Show Toast
function showToast(message) {
  if (remainingTime === 0) {
    toastMessage.classList.add('show');
  }
  setTimeout(() => {
    toastMessage.classList.remove("show");
  }, 3000);
  console.log("showToast called!");

  // Your code goes here ...





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
