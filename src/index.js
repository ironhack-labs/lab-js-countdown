Diff line change
@@ -2,37 +2,45 @@ const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...




const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  remainingTime = 10;
  let i = remainingTime;
  let timeElement = document.getElementById("time");
  timeElement.innerText = i;
  const intervalId = setInterval(function () {
    i--;
    if (i > 0) {
      timeElement.innerText = i;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}




// ITERATION 3: Show Toast
/* ITERATION 3: Show Toast*/
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}