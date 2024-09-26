const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const button = document.querySelector('#start-btn');
button.addEventListener('click',()=>startCountdown());

const time = document.querySelector('#time');

const toastCard = document.querySelector('#toast');
const closeToast = document.querySelector("#close-toast");


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let i = 10;
  button.disabled= true;
  const intervalId = setInterval(function(){
    if(i>0){
      time.innerHTML= i;
    }
    else{
      time.innerHTML= i;
      clearInterval(intervalId);
      showToast()
      button.disabled= false;
    }
    i--;
  },1000)

  // Your code goes here ...
}





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const list = toastCard.classList;
  list.add('show');
  setTimeout(()=>{list.remove('show')},3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToast.addEventListener('click',()=>{list.remove('show')});
}
