const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

    const button = document.getElementById("start-btn");

    button.addEventListener("click", function() {
      console.log("Button was clicked!");
    });


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
}

const time = setInterval(() => {
  console.log("startCountdown");
  startCountdown--;
}, 1000);

// Cancel the execution of the interval function after 10 seconds
setTimeout(() => {
  clearInterval(time);
}, 10000);

function decreaseTime() {
  if (remainingTime > 0) {
    remainingTime--;
    console.log(remainingTime); // Print the remaining time to the console
  } 
  }

const interval = setInterval(decreaseTime, 1000);



document.getElementById("start-btn").disabled = true;



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

    const addToast = document.getElementById("toast");
    addToast.classList.add("show");
    
    setTimeout(() => {
      addToast.classList.remove("show");
    }, 3000);
  }


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

