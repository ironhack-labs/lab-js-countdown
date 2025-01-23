const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const btn2 = document.getElementById("start-btn");

btn2.addEventListener("click", () => {
  startCountdown();
})


// ITERATION 2: Start Countdown
function startCountdown() {
  const timeElement = document.getElementById("time")
  console.log("startCountdown called!");
  let counter = 10;
  const intervalId = setInterval(function (){
    counter --;
    timeElement.textContent = `${counter}`;
    btn2.disabled = true;
    if (counter === 0){
      clearInterval(intervalId);
      showToast();
      btn2.disabled = false;
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  const timeElement = document.getElementById("toast")
  console.log("showToast called!");
  const list = timeElement.classList;
  list.add("show");
  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
