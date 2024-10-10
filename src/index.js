const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
// let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const btnOne = document.getElementById("start-btn");
btnOne.addEventListener("click", () => {
    startCountdown()
    document.getElementById("start-btn").disabled = true;
});

const btnTwo = document.getElementById("close-toast");
btnTwo.addEventListener("click", () => {
  list.remove("show");
});  

// ITERATION 2: Start Countdown

  
function startCountdown(){
  let timer = setInterval(function() {
    remainingTime--;
    const timeElm = document.getElementById("time");
timeElm.innerText = `${remainingTime}`;

    if(remainingTime === 0){
      clearInterval(timer);
      showToast()
    }
  }, 1000)};





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const list = toast.classList;
list.add("show");

setTimeout(function(){
list.remove("show")
}, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}

const messageOne = "⏰ Final countdown! ⏰";
const messageTwo = "Start the engines! 💥";
const messageThree = "Lift off! 🚀"