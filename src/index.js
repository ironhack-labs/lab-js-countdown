const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.getElementById("start-btn").addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  //disable the star button
  document.getElementById("start-btn").disabled = true;

  // Start the countdown timer
  timer = setInterval(() => {
    remainingTime -= 1;
    document.getElementById("time").textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      document.getElementById("start-btn").disabled = false;
      remainingTime = DURATION; // Reset the remaining time
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  // Show the toast card element
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  toastMessage.textContent = message;
  toast.classList.add("show");

  // Set a timeout to hide the toast card after 3 seconds
  const toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.getElementById('close-toast').addEventListener('click', () => {
    clearTimeout(toastTimeout);
    toast.classList.remove('show');
  });
}
