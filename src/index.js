const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
const timeInSecs = document.querySelector("#time");

function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  timer = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      timeInSecs.innerText = remainingTime;

      //disabled during the countdown using the disabled property, so that the user can't click it.
      startBtn.disabled = true;


      if (remainingTime === 9) showToast("⏰ Final countdown! ⏰");
      if (remainingTime === 5) showToast("Start the engines! 💥");
    } else {
      clearInterval(timer);

      showToast("Lift off! 🚀");
    }
  }, 1000);
}



// ITERATION 3: Show Toast
const toastCard = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastCard.classList.add("show");

  toastMessage.innerText = message;

  const timeoutId = setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToastCard = document.querySelector("#close-toast");

  closeToastCard.addEventListener("click", () => {
    clearTimeout(timeoutId);
    toastCard.classList.remove("show");
  });

}
