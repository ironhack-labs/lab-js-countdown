const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const btnStarter = document.getElementById('start-btn');
const divTime =  document.getElementById('time');
btnStarter.onclick = () => {
    startCountdown();
}



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  btnStarter.disabled = true;
  
  
  // Your code goes here ...
  const idInt = setInterval(() => {
    let time = parseInt(divTime.innerHTML);
    if(time > 0){
      time--;
      divTime.innerHTML = time;
    } else {
      clearInterval(idInt);
      showToast();
    }
  } , 1000)
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  
   const divToastClases = document.getElementById('toast').classList;
  divToastClases.add('show');

  setTimeout(() => {
    divToastClases.remove('show');
  } , 3000);

}