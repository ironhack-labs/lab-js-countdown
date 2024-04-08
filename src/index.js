const divTime = document.getElementById("time");
const showToastCard = document.querySelector(".toast");
const toastMsg = document.getElementById("toast-message");
const closeMsg = document.getElementById("close-toast");

console.log(showToastCard);

const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

console.log(startButton);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  const intervalId = setInterval(function () {
    if (remainingTime > 0) {
      console.log(remainingTime);
      divTime.innerHTML = remainingTime;
    } else {
      console.log("Pop!");
      divTime.innerHTML = remainingTime;
      clearInterval(intervalId);
    }

    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime <= 0) {
      showToast("Lift off! 🚀");
    }

    // showToast();

    remainingTime--;
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log(toastMsg);

  if (message) {
    toastMsg.innerHTML = message;
  }

  const list = showToastCard.classList;
  list.add("show");

  let timer = setTimeout(() => {
    list.add("remove");
  }, 3000);

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeMsg.addEventListener("click", () => {
    list.remove("show");
    clearTimeout(timer);
  });
  // Your code goes here ...
}
