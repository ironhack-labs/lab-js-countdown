const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () =>{
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true;
  remainingTime = DURATION;
  console.log("startCountdown called!");
  document.getElementById("time").innerText = remainingTime;
  timer = setInterval(()=> {
    remainingTime--;
    document.getElementById("time").innerText = remainingTime;
    if(remainingTime <= 0){
      clearInterval(timer);
      startButton.disabled = false;
      showToast("Lift off! 🚀");
    }
  },1000)
  }




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  toastMessage.innerText = message;
  toast.classList.add("show");
  setTimeout(()=>{
    toast.classList.remove("show");
  }, 3000);
  }

  // Your code goes here ...

  console.log(toast);
  console.log(toastMessage);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  

  // Your code goes here ..
