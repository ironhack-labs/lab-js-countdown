const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
//let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector('#start-btn');
const screenTime = document.querySelector('#time');
const mainBody = document.querySelector('main');



startButton.addEventListener('click', startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  
  const timer = setInterval(() => {
    remainingTime--;
    screenTime.textContent = remainingTime;
  
    if(remainingTime === 0){
    clearInterval(timer);
    const liftEnd = document.querySelector('.toast');
    showToast(liftEnd);
    }

    },1000);

  

  console.log("startCountdown called!");

}


 

// ITERATION 3: Show Toast
function showToast(message) {


  let durationLift = 3;

  const timeLeft = setInterval(() => {
    durationLift--;
    message.classList.add('show');
    
    if(durationLift === 0){
      message.remove();
    }
    if(durationLift === 0){
      message.remove();
    }
    if(durationLift === 0){
      message.remove();
    }


  }, 1000);


  
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeElement = document.querySelector('#close-toast');

  closeElement.addEventListener('click', () => {
    message.remove();
  })


}
