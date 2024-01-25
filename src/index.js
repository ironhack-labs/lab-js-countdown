const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
// Your code goes here ...
const start = document.getElementById("start-btn");

start.addEventListener("click", function () {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  let divTime = document.getElementById("time");
  let countDown = setInterval(function () {
    remainingTime--;
    divTime.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(countDown);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
// Your code goes here ...

//let show = document.getElementsByClassName("show");//
let showCard = document.getElementById("toast");
let closeBtn = document.getElementById("close-toast");

function showToast(message) {
  console.log("showToast called!");

  showCard.classList.add("show");
  setTimeout(function () {
    showCard.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeBtn.addEventListener("click", function () {
    showCard.classList.remove("show");
  });
}
