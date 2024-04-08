const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  const intervalId = setInterval(function () {
    console.log(remainingTime);
    document.getElementById("start-btn").disabled = true;

    const updateCountdown = document.getElementById("time");

    updateCountdown.innerHTML = remainingTime;

    remainingTime--;

    if (remainingTime < 0) {
      showToast();
      clearInterval(intervalId);
    }
  }, 1000);
}

// On each interval tick, the div#time element should be updated to display the remaining time.
// When the remaining time reaches 0, the countdown timer should be stopped.
// When the remaining time reaches 0, the showToast() function should be called to display a toast message to the user (you'll implement this function in the next iteration).

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // const showToastCard = document.querySelector("#toast");
  // showToastCard.style.display = "block";
  const toastElement = document.getElementById("toast");
  console.log(toastElement);
  toastElement.classList.add("show");
  // toastElement.classList.toggle("show");
  setTimeout(() => {
    toastElement.classList.remove("show");
    //
  }, "3000");
  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}

// Show the toast card element (div#toast), which is initially hidden.
// To do this, add the class "show" to the element's class list. You can use classList methods to do this.
// Set a timeout of 3 seconds (3000 milliseconds), after which the toast card should be hidden again.
// To hide the toast card back, simply remove the class "show" from the element's class list.
