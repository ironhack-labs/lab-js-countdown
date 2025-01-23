const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const btn = document.getElementById("start-btn");

btn.addEventListener("click", () => {
  startCountdown()

});



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...

  let count = 10;
  const timer = setInterval(function () {
    document.getElementById("start-btn").disabled = true;

    const remTime = document.getElementById("time");
    remTime.innerText = count;
   
    if (count === 10) {
      showToast("⏰ Final countdown! ⏰")
    }
    else if (count === 5) {
      showToast("Start the engines! 💥")
    } else if (count === 0){
            clearInterval(timer);
      showToast("Lift off! 🚀");
    }

    count--;
    
  }, 1000)

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const element = document.getElementById("toast");
  const msg = document.getElementById("toast-message");

  msg.innerText = message;
  element.classList.add("show");

  setTimeout(function () {
    element.classList.remove("show");
  }, 3000);
}
// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...

const cleared = document.getElementById("close-toast");

cleared.addEventListener("click", () => {
  const newOption = document.getElementById("toast");
  newOption.classList.remove("show");
});
