const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const buttonStart = document.getElementById("start-btn")
buttonStart.addEventListener('click', () => {
console.log("Start countdown clicked!");
});


// ITERATION 2: Start Countdown
timer = document.getElementById("time");
function startCountdown() {
  //console.log("startCountdown called!");
  buttonStart.disabled = true;
  timeDisplay.textContent = remainingTime;
  
  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.textContent = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(timer);
      buttonStart.disabled=false;
      toastElement();
    }
  }, 1000);

  buttonStart.addEventListener('click', startCountdown);


  // timer = setInterval(() => {
  //   remainingTime --;
  //   timeDisplay.textContent = remainingTime;
  //   if (timer < 0) {
  //     clearInterval(timer)
  //     console.log("Running")
  //   }
  // }, 1000);
}


// ITERATION 3: Show Toast
const toastElement = document.getElementById('toast');
function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add('show');

  setTimeout(()=>{
    toastElement.classList.remove("show");

  }, 3000);
  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
