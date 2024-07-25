const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let start = document.getElementById("start-btn");
start.addEventListener("click", () => {
  startCountdown(); 
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const startingButton = document.getElementById("start-btn");
  startingButton.addEventListener("click", () => {
    startCountdown();
  });
  // ITERATION 2: Start Countdown
  function startCountdown() {
    document.getElementById("start-btn").disabled = true;
    const Countdown = setInterval(function () {
      remainingTime--;
      let timer2 = document.getElementById("time");
      timer2.innerHTML = remainingTime;
      if (remainingTime === 0) {
        clearInterval(Countdown);
        showToast();
      }
    }, 1000)
  }
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.querySelector(".toast");
  toast.classList.add("show");
 
  setTimeout (function (){
    toast.classList.remove("show");
  },3000);


  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
