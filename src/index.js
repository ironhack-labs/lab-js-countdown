const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown()});



// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");
  const timerElement = document.querySelector("#time"); 
  startButton.disabled = true; // Disable the start button to prevent multiple clicks

  timer = setInterval(() => { remainingTime--; // Decrease remaining time by 1 second
    timerElement.innerText = remainingTime; // Update the timer display
if(remainingTime === 0) {
  clearInterval(timer);
  showToast( "Lift off! 🚀");
}
// if (remainingTime === 5) {
//     showToast("Start the engines! :boom:");
//   }
}, 1000);

//   showToast(":alarm_clock: Final countdown! :alarm_clock:");

}
  





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toastElement = document.querySelector("#toast");
  const toastMessageElement = document.querySelector("#toast-message");
  toastMessageElement.innerText = message; // Set the toast message
toastElement.classList.add("show"); // Show the toast by adding the "show" class 
const toastTimer = setTimeout(function() {
  toastElement.classList.remove("show"); // Hide the toast after 3 seconds
},3000);  // Your code goes here ...

// showToast("Lift off! 🚀");


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}

