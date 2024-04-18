const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.querySelector("#start-btn");
//console.log(startBtn);
startBtn.addEventListener("click", () => {
  startCountdown();
  startBtn.style.display = "none";
});

// ITERATION 2: Start Countdown
const divTime = document.querySelector("#time");
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...

  const intervalId = setInterval(decre, 1000);
  function decre() {
    remainingTime--;
    divTime.textContent = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(intervalId);
      showToast();
    }
  }
}

// ITERATION 3: Show Toast
const divToast = document.querySelector("#toast");
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  divToast.classList.add("show");
  function popShow() {
    divToast.classList.remove("show");
  }
  setTimeout(popShow, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
