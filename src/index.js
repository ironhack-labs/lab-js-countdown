const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function(){
  startCountdown()
    
});



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  let counter = 10;
  const timeElm = document.getElementById("time");
 
  const id = setInterval(function () {
  timeElm.innerHTML = counter;
  document.getElementById("start-btn").disabled = true;
  counter--;

  if (counter === -1) {
    clearInterval(id);
    showToast();
  }
}, 1000);


  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastDiv = document.getElementById("toast");
  
  const classes = toastDiv.classList;
  classes.add("show");

  let counter = 3;
  const id = setInterval(function () {
    
    if (counter === -1) {
      clearInterval(id);
      classes.remove("show");
    }
    
}, 3000);


  

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
const closeToastBtn = document.getElementById("close-toast");

closeToastBtn.addEventListener("click", function(){
  clearInterval(id);
  classes.remove("show");
    
});
}
