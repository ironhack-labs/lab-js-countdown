const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  document.getElementById('start-btn').disabled = true;

  let remainingTime = 10;

  document.getElementById("time").textContent = remainingTime;

  showToast("⏰ Final countdown! ⏰");

  let timer = setInterval(function() {
    remainingTime--;
    document.getElementById("time").textContent = remainingTime;

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0){
      clearInterval(timer);
      showToast("Lift off! 🚀");
      setTimeout(() => {
        remainingTime = 10; 
        document.getElementById("time").textContent = remainingTime; 
        document.getElementById("start-btn").disabled = false; 
      }, 1000);
    }
  }, 1000);
  }
  



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called with message:", message);

  // Your code goes here ...
const toast = document.getElementById("toast");
toast.classList.add("show");

if (message){
  document.getElementById("toast-message").textContent = message;
}

setTimeout(() => {
toast.classList.remove("show");
}, 3000);

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
document.getElementById("close-toast").addEventListener("click", function() {
  console.log("Toast closed manually!");

  clearTimeout(toast);
  toast.classList.remove("show");
});
}
