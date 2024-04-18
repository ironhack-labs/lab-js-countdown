const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// startCountdown()
//   document.getElementById("start-btn").addEventListener("click", startCountdown);
// }



// ITERATION 2: Start Countdown
document.querySelector("#start-btn").addEventListener("click", startCountdown);


function startCountdown() {
  console.log("startCountdown called!");


  document.getElementById("start-btn").disabled = true;

  const countDown = setInterval(() => {
    remainingTime--
    document.querySelector('#time').innerText = remainingTime
  }, 1000);



  setTimeout(() => {
    clearInterval(countDown);
    showToast()
  }, 10000);
}





// let counterValue = 0

// const intervalID = setInterval(() => {
//   counterValue++
//   document.querySelector("#time")).innerText = counterValue
// }, 1000)







// ITERATION 3: Show Toast


const toastMsg = document.querySelector("#toast");
function showToast(message) {
  console.log("showtoast called");
  toastMsg.setAttribute('class', 'toast show')
}





// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...


