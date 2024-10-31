const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


const startButton = document.querySelector("#start-btn");
const countdown = document.querySelector("#time");
const divToast = document.querySelector("#toast");
const toastMsg = document.querySelector("#toast-message");
const closeToastX = document.querySelector('#close-toast')


// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButton.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  startButton.disabled = true;
  countdown.textContent = remainingTime;
  const countdownInterval = setInterval(() => {
    switch(remainingTime) {
      case 10: showToast("⏰ Final countdown! ⏰"); break;
      case 5: showToast("Start the engines! 💥"); break;
      case 0: showToast("Lift off! 🚀"); clearInterval(countdownInterval); return ;
    }
    remainingTime--;
    countdown.textContent = remainingTime;
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  toastMsg.textContent = message;
  divToast.classList.add("show");
  setTimeout(() => divToast.classList.remove("show"), 3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  let timeoutId = setTimeout(() => {
    divToast.classList.remove('show');
  }, 3000);


  closeToastX.addEventListener('click', () => {
    divToast.classList.remove('show');
    clearTimeout(timeoutId);
  });

}
