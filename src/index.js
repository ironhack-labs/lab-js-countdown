const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  let timeElement = document.getElementById('time')
  console.log(timeElement);

  timer = setInterval(function () {
    if (remainingTime > 0) {
      remainingTime -= 1;
      timeElement.innerText = `${remainingTime}`;
    }
    else if (remainingTime === 0) {
      const message = document.querySelector('toast-message');
      showToast(message);
    }
  }, 1000);

}




// ITERATION 3: Show Toast
function showToast(messageParam) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById('toast');






  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
