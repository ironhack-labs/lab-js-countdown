const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = document.querySelector("#time"); // Variable to store the interval
let startButton = document.querySelector("#start-btn");
let time = 10;
let toastCard = document.querySelector("#toast");
let closeToastButton = document.querySelector("#close-toast");
let tenSecMsg = document.querySelector("#toast-message");
let fiveSecMsg = document.querySelector("#toast-message");
let originalMsg = document.querySelector("#toast-message");

// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", () => {
  startCountdown()
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let countDown = setInterval(() =>{
    time -= 1;
    timer.innerText = time;
    if( time <= 0){
      clearInterval(countDown);
    }
    if(time === 0){
      showToast(originalMsg.innerText = "Lift off! 🚀");
    }
    if(time === 9){
      showToast(tenSecMsg.innerText = "⏰ Final countdown! ⏰");
    }
    if(time === 5){
      showToast(fiveSecMsg.innerText = "Start the engines! 💥");
    }
    do startButton = document.querySelector("#start-btn").disabled = true;
    while (timer >= 0);
    
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  //console.log("showToast called!");
  toastCard.classList.add("show");
  setTimeout(()=>{
    toastCard.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToastButton.addEventListener("click", () => {
    toastCard.classList.remove("show");
  })

}

// BONUS : ITERATION 5
function showToast(message) {
  toastCard.classList.add("show");
  setTimeout(()=>{
    toastCard.classList.remove("show");
  }, 3000);

  closeToastButton.addEventListener("click", () => {
    toastCard.classList.remove("show");
  })

};

