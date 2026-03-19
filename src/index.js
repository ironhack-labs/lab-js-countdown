const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval





// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const button = document.querySelector("#start-btn");
 
function handleStrt(){
  console.log("Button was pressed");
  startCountdown();
};

button.addEventListener("click", handleStrt);





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

timer = setInterval(() => {
    remainingTime--;
    document.querySelector("#time").innerHTML = remainingTime;

    if (remainingTime === 0 ) {
      clearInterval(timer);
      showToast();

    }
  }, 1000);
}



// ITERATION 3: Show Toast
const toast = document.querySelector("#toast")


function showToast() {
  console.log("showToast called!");

  // Your code goes here ...
toast.classList.add("show");







  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
