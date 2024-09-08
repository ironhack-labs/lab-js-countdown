const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



//* ITERATION 1: Add event listener to the start button.

document.addEventListener("click", (event) => {
  if (event.target.id === "start-btn") { // nuestro click solo se ejecuta si lo hacemos sobre el elemento con id = start-btn
    //console.log("estamos apretando el boton") con este console solo verificamos que al clickar pase algo.
    startCountdown(); // al hacer click en el button start llamamos a la funcion que inicia el temporizador.
  }
});





//* ITERATION 2: Start Countdown.
const myTime = document.querySelector("div#time") // guardamos y hubicamos el contador en la variable myTime.
const startButton = document.querySelector("#start-btn"); // guardamos y hubicamos el button de start principal.


function startCountdown() {
  //console.log("startCountdown called!");
  if (timer !== null) {
    clearInterval(timer); // clausula de guardia para limpiar cualquier temporizador previo.
  }

  remainingTime = DURATION;
  myTime.innerText = remainingTime; // myTime en el html es 10 en texto, aqui lo convertimos en el numero 10 para que el contador funcione.
  startButton.disabled = true; // desactivamos el button desde el momento de clickar el start button hasta que llegue a cero y se vuelva a reiniciar.

  // Iniciamos la cuenta regresiva
  timer = setInterval(() => {

    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if(remainingTime > 1 ){
      remainingTime--;
      myTime.innerText = remainingTime;
    }  else {
      remainingTime--;
      myTime.innerText = remainingTime;
      showToast("Time's up! 🚀"); // Mostramos el toast justo al llegar a cero.
      clearInterval(timer);    // detenemos el temporizador.

      setTimeout(()=>{ 
        remainingTime = DURATION;
        myTime.innerText = remainingTime;
        startButton.disabled = false;
        hideToast();
      },1000)
    }
  }, 1000);
}







//* ITERATION 3: Show Toast.

function showToast(message) {
  //console.log("showToast called!");
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message")

  toastMessage.innerText = message;
  toast.classList.add("show")

  
  }

  // ocultamos el toast
  function hideToast() {
    const toast = document.getElementById("toast");
    toast.classList.remove("show"); // Ocultamos el toast cuando se reinicia el temporizador
  }



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.getElementById("close-toast").addEventListener("click", () => {
    hideToast(); // Cierra el toast manualmente cuando el usuario hace clic en la "x"
  });
