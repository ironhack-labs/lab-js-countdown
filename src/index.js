const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtnNode = document.querySelector("#start-btn");
startBtnNode.addEventListener("click", startCountdown)



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...

  const timeNode = document.querySelector('#time');
  timeNode.textContent = remainingTime;

  const intervalId = setInterval(()=>{
    remainingTime -- 

    timeNode.textContent = remainingTime

    if(remainingTime === 0){
      clearInterval(intervalId)
      showToast()
    }
  }, 1000)
}




// ITERATION 3: Show Toast
function showToast() {
  console.log("showToast called!");

  // Your code goes here ...

  const toastCardNode = document.querySelector("#toast");

  toastCardNode.classList.add("show");
  
  setTimeout(() => {
    toastCardNode.classList.remove("show");
  }, 3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
