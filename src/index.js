const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtn = document.querySelector("#start-btn")
const countElm = document.querySelector("#time");
const toastDiv = document.getElementById("toast")
const toastMsgDiv = document.getElementById("toast-message")
const closeBtn = document.querySelector("#close-toast")



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startBtn.addEventListener("click", event => {
  startCountdown();
})


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let counter = 10;
  let message = "";
  const timerId = setInterval(() => {

    console.log(counter)
    countElm.innerText = `${counter}`;
    if (counter === 10) {
      message = "⏰ Final countdown! ⏰"
      showToast(message);
    }
    else if (counter === 5) {
      message = "Start the engines! 💥"
      showToast(message);
    }
    if (counter === 0) {
      clearInterval(timerId);
      message = "Lift off! 🚀"
      showToast(message);
    }
    counter--;
  }, 1000)

  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastDiv.style.display = "block";
  toastDiv.classList.add("show");
  toastMsgDiv.innerText = `${message}`
  setTimeout(() => {
    toastDiv.style.display = "none";
    toastDiv.classList.remove("show");
  }, 3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeBtn.addEventListener('click', (event) => {
    toastDiv.classList.remove("show");
  })
  // Your code goes here ...

}
