const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => startCountdown());



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  const timeDisplay = document.getElementById("time");

  remainingTime = DURATION;
  startButton.disable = true;


  const countdownInterval = setInterval(() => {
    remainingTime--
    timeDisplay.textContent = remainingTime;


    // BONUS 5
    if (remainingTime >= 9) {
      showToast("⏰ Final countdown! ⏰");

    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");

    } else if (remainingTime <= 0) {
      showToast("Lift off! 🚀");
      clearInterval(countdownInterval);
      startButton.disable = false;
    }


    /*if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      startButton.disable = false;
      showToast();
    }*/

  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toastCard = document.getElementById("toast");
  toastCard.classList.add("show")

  const toastTimeOut = setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000)

 

  // BONUS 4: Add click event to the close button
  const closeToast = document.getElementById("close-toast")
 
  closeToast.addEventListener("click", () => {
    clearTimeout(toastTimeOut);
    toastCard.classList.remove("show")
  })


  //BONUS 5
  const toastMessage = document.getElementById("toast-message"); 
  toastMessage.textContent = message;
}

