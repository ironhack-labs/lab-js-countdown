const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn")

startButton.addEventListener("click", (e) => {
  startCountdown();
  showToast("⏰ Final countdown! ⏰");


})



// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;
  timer = setInterval(function () {
    remainingTime--;
    document.getElementById("time").innerText = remainingTime


    if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    } 
    
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }

  }, 1000)


  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  document.getElementById("toast").classList.add("show");
  document.getElementById("toast-message").innerText = message;


  const toaster = setTimeout(function () {
    document.getElementById("toast").classList.remove("show");
  }, 3000);

  document.getElementById("close-toast").addEventListener("click", (e) => {
    clearTimeout(toaster);
    document.getElementById("toast").classList.remove("show");

  }

  )


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
