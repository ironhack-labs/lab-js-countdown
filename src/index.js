const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  remainingTime = DURATION;

  document.getElementById("start-btn").disabled = true;
  document.getElementById("time").innerHTML = DURATION;


  timer = setInterval(() => {

    remainingTime -= 1;

    // if (remainingTime > 0) {
    document.getElementById("time").innerHTML = remainingTime;
    //}
    if (remainingTime === 0) {
      clearInterval(timer);
      
      showToast();
      

    }
  }, 1000);

}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  let toast = document.getElementById("toast");
  toast.classList.add("show");

  let timeout = setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  let closeToastButton = document.getElementById("close-toast");

  closeToastButton.addEventListener("click", () => {
    toast.classList.remove("show");
    clearTimeout(timeout);
    
    document.getElementById("start-btn").disabled = false;

  });

}
