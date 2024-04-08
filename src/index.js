const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

//EXAMPLE FROM CLASS
// const timeoutId = setTimeout(() => {
//   console.log("Hey there, Ironhackers!");
// }, 1000);

// //example from today quiz
// function countDown(remainingTime) {
//   let timer = setInterval(() => {
//we dont need to do this:
// if (seconds < 0) {
//   //   minutes--
//   // }
// because minutes and seconds are already automatically calculated
// based on "remainingTIme", which in our case is the function passed argument (quiz.timeRemaining)
//     const minutes = Math.floor(remainingTime / 60)
//       .toString()
//       .padStart(2, "0");
//     const seconds = (remainingTime % 60).toString().padStart(2, "0");
//     const timeRemainingContainer = document.getElementById("timeRemaining");
//     timeRemainingContainer.innerText = `${minutes}:${seconds}`;
//     remainingTime--;

//     if (remainingTime < 0) {
//       clearInterval(timer);
//       showResults();
//     }
//   }, 1000);
// }
// countDown(quiz.timeRemaining);

// ITERATION 1: Add event listener to the start button

//When clicked, the event should trigger the existing function startCountdown().
// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown());

// ITERATION 2: Start Countdown
// Your code goes here ...
function startCountdown() {
  //FIX THIS
  console.log("startCountdown called!");
  const time = document.querySelector("#time"); //in html there is a div with id="timer" which is 10 seconds
  //same as before but here inside of function, scoping, shadowing
  const startButton = document.getElementById("start-btn");

  //instructions:
  //The start button (#start-btn) should be disabled during the countdown using the disabled property, so that the user can't click it.
  startButton.disabled = true;

  timer = setInterval(() => {
    //textContent also copies the css not only the innerText and not only innerHTML
    time.textContent = remainingTime; //which is = duration, which is 10

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast(" Lift off! 🚀");
    }
    remainingTime--;
  }, 1000); //to do it every 1 second
} //still fron startCountdown function

// ITERATION 3: Show Toast

function showToast(message) {
  const toastElement = document.querySelector("#toast");
  const toastMessage = document.querySelector("#toast-message");

  // Your code goes here ...
  // Show the toast card element (div#toast), which is initially hidden.
  // To do this, add the class "show" to the element's class list.
  // You can use classList methods to do this.

  toastElement.classList.add("show");
  //now we display the message that we pass as argument to this function
  toastMessage.textContent = message;

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  // Your code goes here ...

  //instructions:
  //Add a 'click' event listener to the close button.
  //When clicking the "x" button, the event should clear the timeout and hide the toast card.
  // To make the toast card disappear, you need to remove the class "show" from the element's class list, in the same way you did in the previous iteration.

  const closeToast = document.querySelector("#close-toast");
  closeToast.addEventListener("click", function () {
    toastElement.classList.remove("show");
    clearTimeout(timeout);
  });

  const timeout = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);
}
//we don't call this function here because we only call in line 61
//when we used this for time reachin 0;
// if (remainingTime === 0) {
//   clearInterval(timer);
//   showToast(" Lift off! 🚀");
// }
