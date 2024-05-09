const DURATION = 10; // 10 seconds
let remainingTime = DURATION;// Countdown starting from 10
let timer = null; // Variable to store the interval

const startButton = document.querySelector("#start-btn")



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButton.addEventListener("click", startCountdown)




// ITERATION 2: Start Countdown
function startCountdown() {
  remainingTime = DURATION

  countdownLogic()
  // Your code goes here ...
  startButton.disabled = 'true'
  
  const intervalId = setInterval(countdownLogic, 1000)

  function countdownLogic() {
    
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰")
    }
    else if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }
    else if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      startButton.disabled = false
      clearInterval(intervalId)
    } 
    
    document.querySelector('#time').innerText = remainingTime
    remainingTime--
  }
  
}





// ITERATION 3: Show Toast
function showToast(message) {
  let i = 0;
  
  document.querySelector('#toast').classList.add('show');
  document.querySelector('#toast-message').innerText = message
  const intervalId = setInterval(function () {
    if (i < 3) {
      
    } else {
      document.querySelector('#toast').classList.remove('show');
      clearInterval(intervalId);
    }
  
    i++;
  }, 1000);

  // console.log(document.querySelector('#toast'))

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeButton = document.querySelector('#close-toast');
  closeButton.addEventListener('click', () => {
    document.querySelector('#toast').classList.remove('show');
  })
  // Your code goes here ...

}