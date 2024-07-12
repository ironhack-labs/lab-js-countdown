const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener('click', () => {
  startCountdown();
})




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  let counter = 10;
  const timeDiv = document.querySelector("#time");
  
  timer = setInterval(() => {
    timeDiv.textContent = counter;
    counter--;
    
    
    if(counter === 0){
      clearInterval(timer);
    };  
    
  }, 1000);
  
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
