const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtn= document.getElementById("start-btn");
const timeCount=document.getElementById("time");
const toastCard=document.getElementById("toast");
const toastClose=document.getElementById("close-toast");


// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startBtn.addEventListener("click", () => startCountdown());



// ITERATION 2: Start Countdown
let intervalId
let time=10;
function startCountdown() {
  if (time >0) {
  console.log("startCountdown called!");
  intervalId= setInterval(() =>{
    time --;
    timeCount.innerText= time;
  if (time <= 0){
      clearInterval(intervalId);
      showToast();
      toastClose.addEventListener("click", () => {
        toastCard.classList.remove("show");
      })
    }
  }, 1000)}
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastCard.classList.add("show");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
