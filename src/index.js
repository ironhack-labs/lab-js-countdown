const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", () => {
  startCountdown();
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...

  const timeElement = document.querySelector("#time");
  const startBtnElement = document.querySelector("#start-btn");

  startBtnElement.disabled = true;

  startBtnElement.innerText = "Counting...";
  startBtnElement.style.backgroundColor = "gray";

 
  timeElement.innerText = remainingTime;


  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    console.log(remainingTime);

    
    if (remainingTime <= 0) {
      clearInterval(timer);
      timer = null;

    
      startBtnElement.disabled = false;
      startBtnElement.innerText = "Start Countdown";
      startBtnElement.style.backgroundColor = "red";

    showToast();
      
    }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
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


