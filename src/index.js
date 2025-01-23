const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const countDown = document.querySelector("#start-btn");

const toast = document.querySelector("#toast");

const closeToast = document.querySelector("#close-toast");

const toastMessage = document.querySelector("#toast-message");

countDown.addEventListener("click", () => {

  startCountdown();
});


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...

  countDown.disabled = true

  let temporizador = document.querySelector("#time")

  let i = 10;
  const contador = setInterval(function () {

    if(i == 10) {
      let mensaje = "⏰ Final countdown! ⏰"
      showToast(mensaje)
    }

    if(i == 5) {
      let mensaje = "Start the engines! 💥"
      showToast(mensaje)
    }

    if (i > 0) {
      console.log(i)
      temporizador.innerHTML = i
    } else {
      console.log(i)
      temporizador.innerHTML = i
      clearInterval(contador)
      let mensaje = "Lift off! 🚀"
      showToast(mensaje)
    }

    i--

  }, 1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  //toast.setAttribute("class", "toast show") // -> OTRA MANERA DE CAMBIAR LA CLASE DEL BOTÓN (DEJO LA QUE TENÍA Y AÑADO "show")

  toastMessage.innerHTML = message

  const toastButton = toast.classList
  toastButton.add("show")

  const hideToast = setInterval(function () {

    toastButton.remove("show")
    clearInterval(hideToast)

  }, 3000)


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  closeToast.addEventListener("click", () => {

    toastButton.remove("show")

  });

}
