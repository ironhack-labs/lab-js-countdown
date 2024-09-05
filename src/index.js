const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButton = document.querySelector("#start-btn");
const displayTimer = document.querySelector("#time");
const popUp = document.querySelector("#toast");
const popUpContent = popUp.querySelector('#toast-message');
const closeButton = popUp.querySelector('#close-toast');

// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true;
  // console.log(startButton.attr("disabled", true))
 
  timer = setInterval(() => {
    displayTimer.innerText = `${remainingTime}`;
    if(remainingTime == 10){
      showToast('⏰ Final countdown! ⏰')
    } else if(remainingTime == 5){ 
      showToast('Start the engines! 💥')
    } else if (remainingTime == 0) {
      clearInterval(timer);
      showToast('Lift off! 🚀');
    }
    remainingTime -= 1;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  popUp.classList.add("show");
  popUpContent.innerText = message;
  const showPopUp = setTimeout(() => {
    popUp.classList.toggle("show");
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeButton.addEventListener('click', () => {
    clearTimeout(showPopUp)
    popUp.classList.remove('show')
  })
}