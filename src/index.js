const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById('start-btn'); // set the button in a const

startButton.addEventListener('click', () => { // add event
  startCountdown();
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  let divTime = document.getElementById('time');
  let remainingTime = 10; 

  let timer = setInterval(() => {
    divTime.innerText = remainingTime;
    remainingTime-=1;
    startButton.disabled = true;

    if (remainingTime === 0){
      clearInterval(timer);
      showToast();
      startButton.disabled = false;
      divTime.innerText = 10;
    }
}, 1000);
};




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

 const littleWindow= document.getElementById('toast');
 let littleWindowClass = littleWindow.classList;
 littleWindowClass.add('show');

  setTimeout(() => {
    littleWindowClass.remove('show');
  }, 3000);
  
};
