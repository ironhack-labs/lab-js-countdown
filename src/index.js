const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");

  startButton.addEventListener("click",function(){
     startCountdown();

  });





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  let timer = setInterval(function (){
    remainingTime --;

  document.getElementById("time").textContent = remainingTime;

  if (remainingTime === 0){
    clearInterval(timer);
    showToast()
  }

},1000);



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  let theToastDiv = document.getElementById("toast")
  theToastDiv.classList.add = ("show")

  setTimeout(function(){
    theToastDiv.classList.remove("show")
  }, 3000);

}





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
