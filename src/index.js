const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let buttonSt = document.getElementById(`start-btn`);
const timeIndex = document.querySelector("#time");
const toast = document.querySelector(`#toast`);

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
buttonSt.addEventListener(`click`, () => {
  console.log(`clicked!`);
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...

  timer = setInterval(() => {
    remainingTime--;
    timeIndex.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Time's up!");
    }
    console.log(remainingTime);
  }, 1000);
}
// buttonSt.classList.add("button:disabled");
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    console.log("showToast hidden again!");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...
}

// [Variabl].classList.add('show');

// ///set timeout
// setTimeout(() => {
//   console.log("3 sec passed");
// }, 3000);
