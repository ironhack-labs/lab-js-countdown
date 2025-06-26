const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let visibleTimer = document.getElementById("time");


// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  console.log(startBtn)
  startCountdown()
});



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  document.getElementById("start-btn").disabled = true;
  visibleTimer.textContent = remainingTime;

  if (timer != null) {
    clearInterval(timer)
  }
  timer = setInterval(() => {
    //visibleTimer--;
    remainingTime--;
    console.log(remainingTime);
    visibleTimer.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;





      showToast()

    }


  }, 1000)

}


// Your code goes here ...


const toast = document.getElementById("toast").style.display = "block";


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("Lift Up!");
  document.getElementById("start-btn").disabled = false;
  const addClassToast = document.getElementById("toast").classList;
  addClassToast.add("show");
  setTimeout(() => {
    addClassToast.add("show").disabled = true.
   }, 3000);

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
