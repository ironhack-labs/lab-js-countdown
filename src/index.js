const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
function updateDisplay() {
  document.getElementById('time').textContent = remainingTime;
}

// Function to start the countdown
function startCountdown() {
  if (timer !== null) {
      clearInterval(timer); // Clear any existing timer
  }
  remainingTime = DURATION;
  updateDisplay();

  timer = setInterval(() => {
      remainingTime--;
      updateDisplay();
      if (remainingTime <= 0) {
          clearInterval(timer); // Stop the timer
          alert("Time's up!");
      }
  }, 1000);
}

document.getElementById('start-btn').addEventListener('click', startCountdown);



// ITERATION 2: Start Countdown
//function startCountdown() {}
 //console.log("startCountdown called!");


 function startCountdown() {
  const timeDiv = document.getElementById('time');
  const startButton = document.getElementById('start-btn');

  // Disable the start button
  startButton.disabled = true;

  // Reset remaining time
  remainingTime = DURATION;
  timeDiv.textContent = remainingTime;

  // Start countdown
  timer = setInterval(() => {
      remainingTime--;
      timeDiv.textContent = remainingTime;

      if (remainingTime <= 0) {
          clearInterval(timer);
          showToast();
          startButton.disabled = false; // Re-enable the button
      }
  }, 1000);
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.style.display = 'block';

  // Hide the toast after 3 seconds
  setTimeout(() => {
      toast.style.display = 'none';
  }, 3000);
}

// Add click event listener to the start button
document.getElementById('start-btn').addEventListener('click', startCountdown);





// ITERATION 3: Show Toast
//function showToast(message) {}
  //console.log("showToast called!");

  function startCountdown() {
    const timeDiv = document.getElementById('time');
    const startButton = document.getElementById('start-btn');

    // Disable the start button
    startButton.disabled = true;

    // Reset remaining time
    remainingTime = DURATION;
    timeDiv.textContent = remainingTime;

    // Start countdown
    timer = setInterval(() => {
        remainingTime--;
        timeDiv.textContent = remainingTime;

        if (remainingTime <= 0) {
            clearInterval(timer);
            showToast();
            startButton.disabled = false; // Re-enable the button
        }
    }, 1000);
}

function showToast() {
    const toast = document.getElementById('toast');

    // Show the toast
    toast.classList.add('show');

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Add click event listener to the start button
document.getElementById('start-btn').addEventListener('click', startCountdown);

// Close toast functionality
document.getElementById('close-toast').addEventListener('click', () => {
    const toast = document.getElementById('toast');
    toast.classList.remove('show');
});
 




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


