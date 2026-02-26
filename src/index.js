const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startBttn = document.querySelector("#start-btn");
const time = document.querySelector("#time");
const toast = document.querySelector("#toast");
const closeToast = document.querySelector("#close-toast");



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBttn.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  // Your code goes here ...
  startBttn.disabled = true;
  remainingTime = DURATION;
  time.textContent = remainingTime;
  timer = setInterval(() => {
    remainingTime--;
    time.textContent = remainingTime;

    if(remainingTime <= 0){
      clearInterval(timer);
      timer = null;
      showToast();
      startBttn.disabled = false;
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
  



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
