const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click",startCountdown);




// ITERATION 2: Start Countdown


function startCountdown() {
  startBtn.disabled = true;
  console.log("startCountdown called!");
  let count = 9;
  const intervalID = setInterval(function(){
    document.querySelector("#time").innerHTML = count ; 
    count--;
    if (count < 0) {
      clearInterval(intervalID);
      showToast()
    }
  },1000)



}





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  document.querySelector("#toast").classList.add("show");
  setTimeout(function(){
    document.querySelector("#toast").classList.remove("show");
  }, 3000);

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  document.querySelector("#close-toast").addEventListener("click",function(){
    document.querySelector("#toast").classList.remove("show");
  })


}
