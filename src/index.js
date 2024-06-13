const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});




// ITERATION 2: Start Countdown
function startCountdown() {
  
  console.log("startCountdown called!");
  // Your code goes here ...

  startBtn.disabled = true;

  timer = setInterval(() => {
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    remainingTime -= 1;
    document.getElementById("time").innerText = remainingTime;
    
    switch (remainingTime) {
      case 5:
        showToast("Start the engines! 💥");
        break;
      case 0:
        showToast("Lift off! 🚀");
        clearInterval(timer);
    }
  }, 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastCard = document.getElementById("toast");

  toastCard.classList.add("show");

  if (message) {
    document.getElementById("toast-message").innerText = (message);
  }

  setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.getElementById("close-toast").addEventListener("click", () => {
    toastCard.classList.remove("show");
  });

}
