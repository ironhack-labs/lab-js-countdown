const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  countdownInterval = setInterval(function() {
    
    

    if (remainingTime > 0) {
      remainingTime-=1;
      //console.log(remainingTime)
        document.querySelector('#time').innerText= remainingTime;
         
    } else {
      
      showToast();
      clearInterval(countdownInterval);
    }

    
  }, 1000);
  document.getElementById("start-btn").disabled = true;


  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  message = document.querySelector("#toast");
    message.classList.add("show"); 
    
    setTimeout(function() {
        message.classList.remove("show"); 
    }, 3000);



 startButton.addEventListener("click", startCountdown);


  // Your code goes here ...
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.querySelector("span#close-toast").addEventListener('click', function ()
  {message.classList.remove("show")} )
   


}
