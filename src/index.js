const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const messageElement = document.getElementById("toast-message");
const closeElement = document.getElementById("close-toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButton.addEventListener("click", () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...

 timer = setInterval(() => {
  remainingTime --;
  timerElement.innerText = remainingTime;
  
  if (remainingTime === 0) {
    messageElement.innerText = "Lift off! 🚀";
    clearInterval(timer);
    // when
    showToast();
  };

}, 1000);
}




// ITERATION 3: Show Toast
function showToast(Element) {
  console.log("showToast called!");

  // Your code goes here ...
  toastElement.classList.add("show");
  setTimeout(() => {
    toastElement.style.display = "none";
  }, 3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeElement.addEventListener("click", () => {
    remainingTime = 0;
    timerElement.innerText = remainingTime;
    toastElement.classList.remove("show");
  })
}
