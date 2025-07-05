const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.querySelector("#start-btn").addEventListener('click', startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  let time = 10;

  document.querySelector('#start-btn').disabled = true;

  const intervalId = setInterval(function () {
    document.querySelector('#time').innerHTML = time;
    if (time === 10) {
      showToast('⏰ Final countdown! ⏰')
    } else if (time === 5) {
      showToast("Start the engines! 💥")
    } else if (time === 0) {
      showToast('Lift off! 🚀')
      clearInterval(intervalId)
      document.querySelector('#start-btn').disabled = false;
      return;
    }
    time--;
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.querySelector('#toast');

  toast.textContent = message;
  toast.classList.add("show");

  // setTimeout to hide it again
  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  /*const closeToastBtn = document.querySelector("#close-toast"); 
  
  closeToastBtn.addEventListener('click', () => {
  clearTimeout(toastTimeout); 
  toast.classList.remove("show"); 
  })*/
}
