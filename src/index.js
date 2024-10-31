const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
document.querySelector('#start-btn').addEventListener('click', startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {

  showToast('⏰ Final countdown! ⏰');

  let countdown = setInterval(() => {
    remainingTime--;

    switch (true) {
      case (remainingTime === 0):
        clearInterval(countdown);
        showToast('Lift off! 🚀');
        break;
      case (remainingTime === 5):
        showToast('Start the engines! 💥');
        break;
    }

    document.querySelector('#time').innerText = remainingTime;

  }, 1000);

}

// ITERATION 3: Show Toast
function showToast(message) {
  setTimeout(() => {
    document.querySelector('#toast').classList.remove('show');
    /* remainingTime = DURATION;
    document.querySelector('#time').innerText = DURATION; */
  }, 3000);

  document.querySelector('#toast-message').innerText = message;
  document.querySelector('#toast').classList.add('show');
  //document.querySelector('#toast').style.setProperty('visibility', 'visible');

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  document.querySelector('#close-toast').addEventListener('click', () => {
    document.querySelector('#toast').classList.remove('show');
  });

}
