const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let startButton = document.getElementById("start-btn");

startButton.addEventListener("click", (event) => {
  startCountdown();
} )




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById("start-btn").disabled = true;

 const intId = setInterval(() => {
    remainingTime = remainingTime - 1;
    let countDown = document.getElementById("time");

    countDown.innerText = "";
    countDown.innerHTML = remainingTime;
    ;

    if (remainingTime < 1) {
        clearInterval(intId);
        showToast();
    }
  }, 1000)

  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const celebrate = document.querySelector('div#toast');
  const list = celebrate.classList;
  list.add("show");

  setTimeout (() => {
    list.remove("show");
  }, 3000);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
