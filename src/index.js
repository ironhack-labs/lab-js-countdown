const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener('click', startCountdown)
const closeButton = document.querySelector("#close-toast");

// ITERATION 2: Start Countdown
function startCountdown(e) {

  let counter = 10;
  const timeElement = document.querySelector("#time");
  const myToast  = new Toast("⏰ Final countdown! ⏰");

  const myInterval = setInterval(decrementTimer, 1000);

  function decrementTimer(){
    if (counter>0) {
      counter -= 1;

      startBtn.setAttribute("disabled", "disabled");

      if (counter===5) {

        const myToast1 = new Toast("Start the engines! 💥");
      }

    } else {

      const myToast2 = new Toast("Lift off! 🚀");

      clearInterval(myInterval);
    }

    timeElement.innerHTML = counter;
  }
}




