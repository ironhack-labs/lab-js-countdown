const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtnElement = document.getElementById("start-btn");
const timerElement = document.getElementById("time");
const closingButton = document.getElementById("close-toast");
const toastMessages = document.getElementById("toast-message");


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtnElement.addEventListener("click", () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  ourInterval = setInterval(() => {
    timerElement.innerText = remainingTime;
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    else if (remainingTime === 0) {
      clearInterval(ourInterval);
      showToast("Lift off! 🚀");
    };
    remainingTime--;
  document.getElementById("start-btn").disabled = true; // button disabled property
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  toastMessages.innerText = message;
  console.log("showToast called!");
  const list = document.getElementById("toast").classList;    // adding the class show to the id toast
  list.add("show");
  // Your code goes here ...
  ourTimeOut = setInterval(() => {
    let timeOut = 3000;
    timeOut--;
    if (timeOut === 0) {
      clearInterval(ourTimeOut);
    }
    const list = document.getElementById("toast").classList;    // removing the class show to the id toast > outside of if condition
    list.remove("show");
  }, 3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
closingButton.addEventListener("click", () => {
  const list = document.getElementById("toast").classList;    // removing the class show to the id toast > outside of if condition
  list.remove("show");
  remainingTime = 10;
  timerElement.innerText = remainingTime;
})
}
