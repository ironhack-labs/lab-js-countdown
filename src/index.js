const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startCountBtnNode = document.querySelector('#start-btn');
// console.log(startCountBtn) // <button id="start-btn">Start Countdown</button>
const displayedTimeNode = document.querySelector('#time');
// console.log(displayedTimeNode) // <div id="time">10</div>
const toastCardNode = document.querySelector('#toast');
// console.log(toastCardNode) // <div id="toast" class="toast">...<div>

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startCountBtnNode.addEventListener('click', () => {
  startCountdown();
});



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  let intervalId = setInterval(() => {
    remainingTime--;
    
    displayedTimeNode.innerText = remainingTime;

    if(remainingTime === 0) {
      clearInterval(intervalId) // detiene el intervalo
      showToast();
    }

  }, 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toastCardNode.classList.toggle('show');

  setTimeout(() => {
    toastCardNode.classList.remove('show')
  }, 3000)





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
