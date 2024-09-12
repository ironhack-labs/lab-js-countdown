const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
const timerDown = document.getElementById("time");

startButton.addEventListener('click', () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  const countdownIntervall = setInterval(() => {
  console.log("startCountdown called!");

      startButton.disabled = true; 
      timerDown.innerText = remainingTime;
      remainingTime--;

    if (remainingTime === -1){
      clearInterval(countdownIntervall)
      showToast ();
    }
  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toastCard = document.getElementById("toast");
  const list = toastCard.classList;
  list.add("show")

  setTimeout(function () {
    list.remove("show");
  }, 3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeToastButton = document.getElementById("close-toast");
  
  closeToastButton.addEventListener('click', () => {
    list.remove("show");
  })

}
