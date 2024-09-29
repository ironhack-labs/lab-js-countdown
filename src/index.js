const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const button = document.getElementById("start-btn");
button.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  remainingTime = DURATION;


  // Your code goes here ...
  if (timer) {
    clearInterval(timer);
  }
    timer = setInterval(() => {
      remainingTime--;
      console.log("remainingTime:", remainingTime);
      const timeDiv = document.getElementById("time");
      timeDiv.textContent = remainingTime;
  
      if (remainingTime <= 0) {
        clearInterval(timer);
        console.log("timer finished");
        
        showToast();
      }
    },1000);
      }







// ITERATION 3: Show Toast
function showToast() {
  console.log("showToast called!");

  // Your code goes here ...
    const toast = document.getElementById("toast");
    toast.classList.add("show");
  
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


