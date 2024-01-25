let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

let asignarTextoElemento = (elemento, texto) => {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerText = texto;
  return;
};

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento(".texto__parrafo", `Escoge un numero entre el 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
condicionesIniciales();

function generarNumeroSecreto() {
  let numeroGenerado = Math.ceil(Math.random() * numeroMaximo);
  if (numerosSorteados.length === numeroMaximo) {
    return asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles, gracias por jugar c:");
  }
  if (numerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    numerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
function limpiarCaja() {
  document.querySelector("#numeroUsuario").value = "";
}
function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
let verificarIntento = () => {
  let numeroDeUsuario = document.querySelector("#numeroUsuario").value;
  if (parseInt(numeroDeUsuario) === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Ganaste! acertaste el Numero Secreto, despues de ${intentos} ${intentos === 1 ? "vez" : "veces"} :)`
    );
    document.querySelector("#reiniciar").removeAttribute("disabled");
  } else if (numeroDeUsuario > numeroSecreto) {
    asignarTextoElemento("p", "El numero Secreto es menor");
    limpiarCaja();
  } else {
    asignarTextoElemento("p", "El numero Secreto es mayor");
    limpiarCaja();
  }
  intentos++;
};
