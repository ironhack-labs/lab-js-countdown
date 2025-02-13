const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let startButtonNode = document.querySelector("#start-btn");
let showTimeNode = document.querySelector("#time");
let toastNode = document.querySelector("#toast");
let closeToastNode = document.querySelector("#close-toast");
let toastMessageNode = document.querySelector("#toast-message");

startButtonNode.addEventListener("click",() =>{
  startCountdown();
})


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...

  let counter = 10;
  let stringUsed = `⏰ Final countdown! ⏰`
  showToast(stringUsed);

  timer = setInterval(() => {
    counter -= 1;
    showTimeNode.innerHTML = `${counter}`;

    startButtonNode.disabled = true;
    
    if(counter === 5){
      stringUsed = `Start the engines! 💥`
      showToast(stringUsed);
    }else if(counter <= 0){
      stringUsed = `Lift off! 🚀`
      showToast(stringUsed);

      clearInterval(timer); 
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  toastNode.classList.add("show");
  toastMessageNode.innerHTML = message;
  setTimeout(() => {
    toastNode.classList.remove("show");
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  closeToastNode.addEventListener("click",()=>{
    toastNode.classList.remove("show");
  })
}
