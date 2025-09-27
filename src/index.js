const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn"); // Select the button by its id from the HTML
startButton.addEventListener("click", startCountdown); // Add the click event listener to trigger startCountdown



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  // Your code goes here ...
  const realCountdown = document.getElementById('time');


  // stop any previous countdown
  clearInterval(setInterval);
  remainingTime = DURATION;


    //Edit button
  startButton.disabled = true;
  startButton.style.backgroundColor = '#ccc';
  startButton.style.cursor = 'not-allowed';

  const variableTimer = setInterval(function(){
    remainingTime--;
    realCountdown.textContent = remainingTime;      // div#time 
    console.log(remainingTime);

    if(remainingTime <= 0){
      clearInterval(variableTimer);

      //Edit button
      startButton.disabled = false;
      startButton.style.backgroundColor = '';
      startButton.style.cursor = 'pointer';
      
      showToast();
    }
  },10)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const realShowToast = document.getElementById('toast');
  realShowToast.classList.add('show');
  const timeoutId = setTimeout(function(){
    realShowToast.classList.remove('show');
  }, 3000);

  
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const realCloseShowToast = document.getElementById('close-toast');
  realCloseShowToast.addEventListener("click",function(){
    clearTimeout(timeoutId);
    realShowToast.classList.remove('show');
  });



}
