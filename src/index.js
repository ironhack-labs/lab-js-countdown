const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startCountdown)


// ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...
  let countdown = 10;
  const timeElement = document.getElementById('time')
  startButton.disabled = true

  const updateTime = () =>{
    timeElement.textContent = countdown;
   }
  const countdownInterval = setInterval(function () {

  countdown--;
  updateTime()
 
  if (countdown <= 0) {
   
    clearInterval(countdownInterval);

    showToast();
    startButton.disabled = false
  }
}, 1000);
  console.log("startCountdown called!");
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  
    const toastCard = document.getElementById('toast')
    toastCard.innerHTML = '';
    toastCard.innerHTML = `<span id="toast-message">Lift off! 🚀</span>`
    toastCard.classList.add('show')

    setTimeout(() =>{
      toastCard.classList.remove('show')
    }, 3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
