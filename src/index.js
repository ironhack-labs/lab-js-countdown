const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeDivNode = document.querySelector("#time");



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButtonNode = document.querySelector("#start-btn");

startButtonNode.addEventListener("click", () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  let intervalIDTimer = setInterval(() => {
    
    startButtonNode.disabled = true;
    
    // Decrecemos el reaminingTime en 1 para mostrarlo luego en el innerText del div. Este es el contador de cuenta atrás que ve el usuario.
    remainingTime -= 1;
    timeDivNode.innerText = remainingTime; // FUNCIONA
    
    // Si llega a 0, entonces detenemos el Interval y llamamos a showToast con el mensaje de #toast-message
    if(remainingTime === 0) {
      clearInterval(intervalIDTimer);
      let toastMNode = document.querySelector("#toast-message");
      let mensajeToast = toastMNode.innerText;
      showToast(mensajeToast);
    }

  },1000)
  

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastNode = document.querySelector(".toast");

  toastNode.classList.add("show");


  setTimeout ( () => {

    // Eliminamos la clase "show" para ocultar el toastNode
    startButtonNode.disabled = false
    remainingTime = 10;
    timeDivNode.innerText = remainingTime
    toastNode.classList.remove("show");
  },3000)



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
