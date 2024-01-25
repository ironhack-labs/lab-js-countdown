const DURATION = 3; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.getElementById("start-btn").addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById("start-btn").disabled = true;


  // Your code goes here ...
  let counterDown = remainingTime

  const intervalID = setInterval(() => {
    counterDown--
    document.getElementById('time').innerHTML = counterDown

    if (counterDown === 0) {
      clearInterval(intervalID)
      showToast()
    }
  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastWindow = document.getElementById("toast");

  toastWindow.classList.add("show")

  setTimeout(() => {
    toastWindow.classList.remove("show");
  }, 3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToastX = document.querySelector("#close-toast")
  const closeToastBtn = toastWindow.classList;
  closeToastX.onclick = () => {
    closeToastBtn.remove("show")
  }

}
