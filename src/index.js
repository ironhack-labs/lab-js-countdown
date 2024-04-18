const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const buttonStart = document.getElementById("start-btn");
buttonStart.addEventListener("click", startCountdown)

const timeElement = document.getElementById("time");


function startCountdown(){
buttonStart.disabled = true;
remainingTime = DURATION;
timeElement.textContent = remainingTime;

console.log("startCountdown called!");  

timer = setInterval(function (){
  remainingTime--;

  if (remainingTime >= 0){
    timeElement.textContent = remainingTime;

    if (remainingTime === 0){
      clearInterval(timer);
      buttonStart.disabled = false;
    }
  }
}, 1000);
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toastElement = document.getElementById("toast");

  toastElement.textContent = message;

  toastElement.classList.add("show");

  setTimeout(function(){
    toastElement.classList.remove("show");
  }, 3000);
}


  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


