const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const countDownBtn = document.getElementById("start-btn");
const timeDisplay = document.getElementById("time");
// Your code goes here ...
countDownBtn.addEventListener ("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  countDownBtn.disabled = true;
  remainingTime = DURATION;
  timeDisplay.textContent = remainingTime;
  clearInterval(timer);
  timer = setInterval (() => {
    remainingTime--;
    timeDisplay.textContent = remainingTime;
    if(remainingTime <=0){
      clearInterval(timer);
      countDownBtn.disabled = false
      remainingTime = 0;
      timeDisplay.textContent = 0;
      showToast();
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
const toastElement = document.getElementById("toast");
 toastElement.classList.add("show");
setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
