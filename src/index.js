const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.getElementById('start-btn')
  .addEventListener('click', () => {
    startCountdown();
  });



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  document.getElementById('start-btn')
    .setAttribute("disabled", true);
  showToast("⏰ Final countdown! ⏰");
  timer = setInterval(() => {
    remainingTime -= 1;
    document.getElementById('time')
      .innerText = "";
    document.getElementById('time')
      .append(remainingTime);
    if (remainingTime === 5) showToast("Start the engines! 💥");
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  const toastMessage = document.getElementById('toast-message');
  toastMessage.innerHTML = '';
  toastMessage.append(message);
  const timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.getElementById('close-toast')
    .addEventListener('click', () => {
      clearTimeout(timeoutId);
      toast.classList.remove('show');
    });
}
