const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButtonNode = document.querySelector("#start-btn");

startButtonNode.addEventListener("click", ()=>{
  startCountdown()
})


// ITERATION 2: Start Countdown
//div#timeNode
const timeNode = document.querySelector("#time");

function startCountdown() {
  console.log("startCountdown called!");
  
  timer = setInterval (()=>{
    
    if(remainingTime === 0){
      console.log("entr called!");
  
      //the countdown timer should be stopped  
      clearInterval(timer);
      startButtonNode.disabled = true
      showToast();
    } else {
      remainingTime--;
      timeNode.innerText = remainingTime
    }
    

  },1000 );

  


  // Your code goes here ...
}



const toastNode = document.querySelector("#toast");
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  toastNode.classList.add("show");

  setTimeout(()=>{
    toastNode.classList.remove("show");
  },3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  let closeButtonNode = document.querySelector("#close-toast")
  .addEventListener("click", ()=>{
    toastNode.classList.remove("show");
  })

}
