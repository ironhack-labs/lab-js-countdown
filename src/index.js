const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton=document.getElementById('start-btn');
startButton.addEventListener('click',startCountdown);

let countDownTime=10;
let countDownInterval;
const toastMessage=document.getElementById('toast');
const countDownDisplay=document.getElementById('time');
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled=true;
countDownDisplay.textContent=countDownTime;
countDownInterval = setInterval(() => {
   countDownTime--;
  if(countDownTime<=0){

    clearInterval(countDownInterval);
    countDownDisplay.textContent= '0';
    showToast();
    startButton.disabled=false;
  }else{
    countDownDisplay.textContent=countDownTime;
  }
},1000);
  
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
toastMessage.style.display='block';
toastMessage.classList.add('show');
setTimeout(()=>{
  toastMessage.classList.remove('show');
},3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
const toastCard=document.querySelector('.toast-message');
const closeButton=document.querySelector('#close-toast');
closeButton.addEventListener('click',()=>{
  clearTimeout(countDownInterval)
  countDownDisplay.textContent= '0';
})
}
