const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
function startButton() {
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener("click", () => {
    startCountdown();
  });

}

startButton()

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let countDown = document.getElementById("time");
  const startBtn = document.getElementById("start-btn");
  startBtn.disabled = true;


  // Your code goes here ...
  timer = setInterval(() => {
    countDown.innerText = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      startBtn.disabled = false;
      remainingTime=DURATION;
      countDown.innerText = remainingTime;
      showToast();
      return;
    } 
       remainingTime--;
    
   

  }
    , 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.querySelector(".toast");
  toast.classList.add("show")

  // Your code goes here ...
  setTimeout(() => {
    console.log("AM I toasted?")
   toast.classList.remove("show");
  }, 3000);
  


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
