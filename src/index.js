const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.getElementById("start-btn").addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  document.getElementById("start-btn").disabled = true;
  let timeRemaining = 10;

  const countdown = setInterval(() => {
    timeRemaining--;
    document.getElementById("time").innerText = timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(countdown);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  //console.log("showToast called!");

  document.getElementById('toast-message').innerText = message;
  document.getElementById('toast').classList.add('show');

    setTimeout(() => {
      document.getElementById('toast').classList.remove('show');
    }, 5000);
}


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

