const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => startCountdown()) 



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
 timer = setInterval( () => {
    remainingTime -= 1
    document.querySelector("#time").innerHTML = `${remainingTime}`;

    if (remainingTime <1 ){
      clearInterval(timer);
      console.log("stahp");
      showToast();
    }
    startButton.disabled = true;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  
  const toastBox = document.querySelector(".toast#toast");
    
  toastBox.classList.add("show");
  setTimeout(() =>{
    toastBox.classList.remove("show");
  }, 3000)
  

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
   const toastCloseButton = document.getElementById("close-toast");
   toastCloseButton.addEventListener("click", () => toastBox.classList.remove("show"));
}
