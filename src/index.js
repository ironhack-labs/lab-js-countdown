const DURATION = 10; // 10 seconds
let remainingTime = 10; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let buttonStart = document.querySelector('#start-btn');
let timeNode = document.querySelector('#time');
let cardToast = document.querySelector('#toast');

buttonStart.addEventListener('click', ()=>{
  startCountdown();
});



// ITERATION 2: Start Countdown
function startCountdown() {
  
  timer = setInterval(()=>{
    remainingTime--
    timeNode.innerHTML = remainingTime;
    console.log(remainingTime);
    buttonStart.disabled = true;

    if(remainingTime === 0){
      clearInterval(timer);
      showToast();
    }

  }, 1000)
  
}



// ITERATION 3: Show Toast
function showToast(){
  console.log("showToast called!");
  cardToast.classList.add('show');
  
  let disableRoquetBlock = setTimeout(()=>{
    cardToast.classList.remove('show');
  },3000);

}
