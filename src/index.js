const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timerToast;


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.getElementById('start-btn').addEventListener('click', startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  showToast("⏰ Final countdown! ⏰");
  document.getElementById("start-btn").disabled = true;
  timer = setInterval( () => {
    remainingTime -= 1;
    document.getElementById('time').innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);  
      remainingTime = DURATION; 
      document.getElementById('time').innerText = remainingTime;
   
      document.getElementById("start-btn").disabled = false;
      showToast("Lift off! 🚀");
    } else if(remainingTime == 5){
      showToast('Start the engines! 💥');
    }

  }, 1000)

  // Your code goes here ...
}



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
function closeToast(){
  clearTimeout(timerToast);    
  document.getElementById("toast").classList.remove("show");
}

// ITERATION 3: Show Toast
function showToast(message) {
 // Your code goes here ...
 console.log("showToast called!");
 document.getElementById('toast-message').innerText = message;
 document.getElementById("toast").classList.add("show");
 timerToast = setTimeout(() => {
  document.getElementById("toast").classList.remove("show");
}, 3000)
 const closeToastButton = document.getElementById("close-toast");
 if (closeToastButton) {
   closeToastButton.addEventListener("click", closeToast);
  }

  }


 //clearTimeout(timerId);