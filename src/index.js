
const DURATION = 10;
let remainingTime = DURATION;
let timer = null;
let timeout = null;


// ITERATION 1: Add event listener to the start button

let startButton = document.querySelector("#start-btn");
let timeDiv = document.querySelector("#time");

startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  remainingTime = DURATION;
  timeDiv.innerText = remainingTime;

  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    timeDiv.innerText = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
      startButton.disabled = false;
    }
  }, 1000);
}



// ITERATION 3: Show Toast
 function showToast() {
  console.log("showToast called!");

  let toastCard = document.querySelector("#toast");

  toastCard.classList.add("show");

  timeout = setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000);
}


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  
let closeToast = document.querySelector("#close-toast");

closeToast.addEventListener("click", () => {
  clearTimeout(timeout);

  let toastCard = document.querySelector("#toast");
  toastCard.classList.remove("show");
});
  



