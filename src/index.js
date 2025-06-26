const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startBtn = document.getElementById('start-btn')
startBtn.addEventListener('click', () => {
  startCountdown()
})


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startBtn.disabled = true;
  remainingTime = DURATION;

  if (remainingTime === 10) {
    showToast('⏰ Final countdown! ⏰')
  };

  timer = setInterval(() => {
    remainingTime--;
    const timeRemainingContainer = document.getElementById('time')
    timeRemainingContainer.innerText = remainingTime


    if (remainingTime === 5) {
      showToast('Start the engines! 💥')
    };
    if (remainingTime === 0) {

      showToast('Lift off! 🚀');
      clearInterval(timer)
      startBtn.disabled = false;
    }
  }, 1000)
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById('toast')
  const toastMsg = document.getElementById('toast-message')
  const closeBtn = document.getElementById('close-toast')

  toastMsg.innerText = message;
  toast.classList.add('show')

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  closeBtn.addEventListener('click', () => {
    toast.classList.remove('show')
  })

}
