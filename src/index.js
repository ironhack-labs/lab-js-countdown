const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
// Your code goes here ...

const startBtnElement = document.querySelector('#start-btn');
let timeElement = document.querySelector('#time');
const toastElement = document.querySelector('#toast');
const closeToastElement = document.querySelector('#close-toast');

startBtnElement.addEventListener('click', ()=>{
  startCountdown();
} )





// ITERATION 2: Start Countdown
  // Your code goes here ...

function startCountdown() {
  console.log("startCountdown called!");
  startBtnElement.disabled = true;

  timer = setInterval(()=> {
    remainingTime--;
    timeElement.textContent = remainingTime;
    if(remainingTime <= 0) {
      clearInterval(timer);//stops interval
      console.log("timer is finished");
      showToast();
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
  toastElement.classList.add('show'); 

  setTimeout(() => {
    toastElement.classList.remove('show');
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...

  closeToastElement.addEventListener('click', ()=>{
    toastElement.classList.remove('show');
  })

}
