const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startbutton = document.querySelector("#start-btn");
startbutton.addEventListener("click", () => {
  startCountdown();
});




// ITERATION 2: Start Countdown
function startCountdown() {
  timer = setInterval(() => {
    remainingTime --;
    let timerDiv = document.querySelector("#time");
    timerDiv.innerHTML = `${remainingTime}`;
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);
  console.log("startCountdown called!");

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  message = document.querySelector("#toast-message");
  message = document.querySelector(".toast");
  message.classList.add("show");

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeButton = document.querySelector("#close-toast"); 
  closeButton.addEventListener("click", () => {
    message.classList.remove("show");
  });
  setTimeout(() => {
    message.classList.remove;
  }, 3000);
  return message;

}


