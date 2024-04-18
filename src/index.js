const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const btnStarter = document.getElementById('start-btn');
const divTime =  document.getElementById('time');

// console.log(parseInt(divTime.innerHTML));

btnStarter.onclick = () => {
    startCountdown();
}



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  btnStarter.disabled = true;
  
  
  // Your code goes here ...
  const id = setInterval(() => {
    let time = parseInt(divTime.innerHTML);
    if(time > 0){
      time--;
      divTime.innerHTML = time;
    } else {
      clearInterval(id);
      showToast();
    }
  } , 1000)
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  
  // Your code goes here ...
  const divToastClases = document.getElementById('toast').classList;
  divToastClases.add('show');

  setTimeout(() => {
    divToastClases.remove('show');
  } , 3000);





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
