


// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => {
  startCountdown();
});



// ITERATION 2: Start Countdown
const timeDisplay = document.getElementById('time');

function startCountdown() {

  let counter = 10;
  startBtn.disabled = true;
  timeDisplay.textContent = counter;


  const intervalId = setInterval(() => {
    timeDisplay.textContent = counter;
    

    if (counter === 0) {
      clearInterval(intervalId);
      startBtn.disabled = false;
      showToast();
      return;

    }
    counter--;
  }, 1000);
}





// ITERATION 3: Show Toast
function showToast() {

  const toastCard = document.getElementById('toast');

  toastCard.classList.add('show');

  setTimeout(() => {
    toastCard.classList.remove('show');
  }, 3000);
}

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
const closeToastBtn = document.getElementById('close-toast');

closeToastBtn.addEventListener('click', () => {
  toastCard.classList.remove('show');
});

  // Your code goes here ...


