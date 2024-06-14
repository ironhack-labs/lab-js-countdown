const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeLeft = document.querySelector("#time")
let toast = document.querySelector(".toast");
let show = document.querySelector(".show");



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startCount = document.getElementById("start-btn");
startCount.addEventListener("click", startCountdown)
console.log(startCount)



// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");
  

  // Your code goes here ...
  const intervalID = setInterval(() => {
    if (remainingTime > 0) {
      console.log("THIS IS THE COUNTDOWN HAPPENING");
      showToast();
      remainingTime--;
      timeLeft.innerText = remainingTime;
    } else if (remainingTime === 0) {
      clearInterval(intervalID);
    } startCount.disabled = true;
  }, 1000);
}


  // Your code goes here ...

// ITERATION 3: Show Toast
function showToast(message) {
  toast.classList.add("show");
  toast.innerHTML = "⏰ Final countdown! ⏰"

  const intervalID = setInterval (() =>{
    if (remainingTime === 10){
      toast.innerHTML = "⏰ Final countdown! ⏰"
    }
    if (remainingTime <= 5){
      toast.innerHTML = "Start the engines! 💥"
    }
    if (remainingTime === 0){
      toast.innerHTML = "Lift off! 🚀"
      toast.classList.toggle("show")
    }
    clearInterval(intervalID)
  }, 1000)
    
}



const close = document.querySelector("#close-toast");
close.addEventListener("click", closeTab)

function closeTab(){
  setTimeout(()=> {
toast.classList.remove("show");
  }, 3000)
}
  



/*
  
  Bonus: Iteration 5 | More Toasts
For this bonus iteration, you'll work on the showToast() function to make it reusable. Currently, the function
 only shows the toast card, which always displays the same message - "Lift off! 🚀". We want to be able to use
  the function to show different messages in the toast card.


Update the showToast() function so that it can be used to show more than one toast message. The function should
 take a message string as an argument. The function should then display the message in the toast element and 
 display the toast for 3 seconds.

To test your function, call the showToast() function with different messages in the startCountdown() function:

When the countdown timer is 10 seconds, show the message: "⏰ Final countdown! ⏰".
When the countdown timer is 5 seconds, show the message: "Start the engines! 💥".
When the countdown timer reaches 0, show the message: "Lift off! 🚀".

  
  */

