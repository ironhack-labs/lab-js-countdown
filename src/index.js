const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const callButton = document.getElementById("start-btn");
callButton.addEventListener("click", startCountdown);
console.log(callButton);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  timer = setInterval(() => {
    remainingTime--;
    document.getElementById("time").innerText = remainingTime;
    document.getElementById("start-btn").disabled = true;
    console.log(`Time remaining: ${remainingTime} seconds`);
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
