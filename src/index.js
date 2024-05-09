const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let cardTimeOut = null; // Variable to store the card timeout



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', () => {
  startCountdown();
})


// ITERATION 2: Start Countdown
function startCountdown() {

  if(remainingTime <= 0) remainingTime = DURATION;

  console.log("startCountdown called!");

  // Your code goes here ...

  const remainingSeconds = document.getElementById('time')
  timer = setInterval(() =>{
    remainingSeconds.innerHTML = remainingTime
    if(remainingTime === 0){
      showToast("Lift off! 🚀");
      clearInterval(timer);
    }
    
    if(remainingTime === 10){
      showToast("⏰ Final countdown! ⏰");
    }
    if(remainingTime === 5){
      showToast("Start the engines! 💥");
    }
    remainingTime --;
  }, 1000)
  return 
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastCard = document.querySelector('div#toast');
  toastCard.classList.add('show')
  toastCard.querySelector('#toast-message').innerHTML = message;
  
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  
  // Your code goes here ...
  
  
  let closeToastBtn = document.querySelector('#close-toast');
  closeToastBtn.addEventListener('click', () => {
    clearTimeout(cardTimeOut)
    //toast.style.display = "none"
  })
  cardTimeOut = setTimeout(() => toastCard.classList.remove('show'), 3000);
}
  
// BONUS: INTERATION 5: TOGGLE MESSAGES


  


