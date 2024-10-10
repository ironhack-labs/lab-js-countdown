const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () =>{
  setInterval(startCountdown(),1000);
})

function updateTime() {

  // Update the #time element
  document.getElementById('time').textContent = remainingTime;
}

// ITERATION 2: Start Countdown
function startCountdown() {
  timer = setInterval(() => {
    console.log(remainingTime);
    remainingTime-= 1;
    updateTime();
    if(remainingTime == 0){
      clearInterval(timer); 
      console.log("Countdown finished!");
      remainingTime = DURATION;
      showToast();
      updateTime();
    }
  },1000);
  // Your code goes here ...
  console.log("startCountDown called!");
}




// ITERATION 3: Show Toast
const toast = document.getElementById("toast");
function showToast() {
 
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
}, 3000);
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
