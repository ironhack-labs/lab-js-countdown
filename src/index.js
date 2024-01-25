const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.getElementById("start-btn").addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  let i = 10;
  let countdownButton = document.getElementById("time");

  let countdown = setInterval(function () {
    i--;
    showToast(); 

    countdownButton.innerHTML = i;

    document.getElementById("start-btn").disabled = true;

    if (i === 0) {
      clearInterval(countdown)
      
      clearTimeout(timeout)
    }

  }, 1000); 

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

toast.classList.add("show");  // show class "show"

let i = 10;

let timer = setInterval(function () {
  i--;

  if (i === 10 && i > 5) {
    toastMessage.innerHTML = "⏰ Final countdown! ⏰";
  } else if (i === 5 && i > 0) {
    toastMessage.innerHTML = "Start the engines! 💥";
  } else {
    toastMessage.innerHTML = "Lift off! 🚀";
  }

  if (i === 0) {
    clearInterval(timer);
    setTimeout(function () {
      toast.classList.add("hidden");
    }, 3000);
  }
}, 1000);


}
