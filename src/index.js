const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
// <button id="start-btn">Start Countdown</button>
const startBtn = document.querySelector('#start-btn');
console.log(startBtn);
startBtn.addEventListener('click', startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
 // <div id="time">10</div>

  console.log("startCountdown called!");

  const timer = setInterval(() => {
  remainingTime--;
  document.querySelector('#time').textContent = remainingTime;

  if (remainingTime === 0) {
    clearInterval(timer);
    showToast();
  }
}, 1000);
}
  // Your code goes here ...
  





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const showingBtn = document.querySelector('#toast');
  showingBtn.classList.add('show');
  setTimeout(function() {
    showToast.classList.remove('show');
  },3000);
}


  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
const closeBtn = document.querySelector("close-toast");
closeBtn.addEventListener("click", () => {
  if (closeBtn) {
    showingBtn.classList.remove("show");
  }
});
