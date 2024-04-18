const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.getElementById("start-btn").addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown

function startCountdown() {
  const timeElement = document.querySelector("#time"); 
  const button = document.querySelector("#start-btn");
  button.disabled = true;


  console.log("startCountdown called!");

  timer = setInterval(startCountdown, 1000);

  timer = setInterval(() => {
    timeElement.textContent = remainingTime;
  });
};

// ITERATION 3: Show Toast

function showToast(message) {
  console.log("showToast called!");

  if (remainingTime === 0) {
    clearInterval(timer);
    showToast(" Finished!");
  };
};

// BONUS: ITERATION 4: TOAST CLOSE BUTTON