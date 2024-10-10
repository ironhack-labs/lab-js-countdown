const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;


  // Your code goes here ...
  const newTime = document.getElementById("time");
 timer = setInterval(() => {
    remainingTime--;
    newTime.innerText = remainingTime;
      if(remainingTime <= 0) {
        clearInterval(timer);
        remainingTime = 0;
        newTime.innerText = remainingTime;
        showToast();
      }
      },1000);
  }





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
const toast = document.getElementById("toast");
toast.classList.add("show");
setTimeout(() => {
  toast.classList.remove("show");
  startButton.disabled = false;
}, 3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
