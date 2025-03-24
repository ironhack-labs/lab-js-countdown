const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.getElementById("start-btn").addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let timeRemaining = 10;
  const timerInterval = setInterval(() => {
    timeRemaining--;
    document.getElementById("time").textContent = timeRemaining;
    
    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      showToast(); 
      document.getElementById("start-btn").disabled = true;
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  document.getElementById("close-toast").addEventListener("click", () => {
    clearTimeout(toastTimeout);
    document.getElementById("toast").classList.remove("show");
  });
  
}

function showToast(message) {
  const toastMessage = document.getElementById("toast-message");
  toastMessage.textContent = message;
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function startCountdown() {
  let timeRemaining = 10;
  const timerInterval = setInterval(() => {
    timeRemaining--;
    document.getElementById("time").textContent = timeRemaining;

    if (timeRemaining === 10) showToast("⏰ Final countdown! ⏰");
    if (timeRemaining === 5) showToast("Start the engines! 💥");
    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      showToast("Lift off! 🚀");
      document.getElementById("start-btn").disabled = true;
    }
  }, 1000);
}

