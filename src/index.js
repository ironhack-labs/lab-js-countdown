const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timer = 10;
  let timeInterval = setInterval(() => {
    timer--;
    document.getElementById("time").innerHTML = `${timer}`;

    if (timer === 0) {
      clearInterval(timeInterval);
      const myElement = document.getElementById("toast");
      showToast(myElement.classList.add("show"));
    }

    if (timer < 10) {
      document.getElementById("start-btn").disabled = true;
    }
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  setTimeout(() => {
    const myElement = document.getElementById("toast");
    showToast(myElement.classList.remove("show"));
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
