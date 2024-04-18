const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let buttonStart = document.querySelector("#start-btn");
buttonStart.addEventListener('click', function(){
  startCountdown();
})




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById("start-btn").disabled = true;
  timer = document.querySelector("#time");

  const intervalId = setInterval(function () {
    if(remainingTime < 0) {
      clearInterval(intervalId);
      showToast();
      return;
    }
    timer.innerHTML = remainingTime;
    remainingTime--;
  }, 1000);
  
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  let card = document.querySelector("#toast");
  card.classList.add("show"); 

  const timeoutId = setTimeout(function () {
    card.remove("show");
  },3000);
}

/* ES5
const timeoutId = setTimeout(function () {
  console.log('Hey there, Ironhackers!');
}, 1000);

// ES6
const timeoutId = setTimeout(() => {
  console.log('Hey there, Ironhackers!');
}, 1000);*/


// BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

