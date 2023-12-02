const d = document;

const cronometro = d.getElementById("cronometro");
const botonInicioPausa = d.getElementById("boton-inicio-pausa");
const botonReiniciar = d.getElementById("boton-reiniciar");

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;
let estadoCronometro = "pausado";

function actualizarCronometro() {
  segundos++;

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }
  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;
}

botonInicioPausa.addEventListener("click", function () {
  if (estadoCronometro === "pausado") {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonInicioPausa.innerHTML = `<i class="bi bi-pause"></i>`;
    botonInicioPausa.classList.remove("iniciar");
    botonInicioPausa.classList.add("pausar");
    estadoCronometro = "andando";
  } else {
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = `<i class="bi bi-play"></i></button> `;
    botonInicioPausa.classList.remove("pausar");
    botonInicioPausa.classList.add("iniciar");
    estadoCronometro = "pausado";
  }
});

botonReiniciar.addEventListener("click", function (e) {
  window.clearInterval(intervaloDeTiempo);

  segundos = "0";
  minutos = "0";
  horas = "0";

  // reiniciar
  cronometro.innerText = "00:00:00";

  // actualizar botones
  botonInicioPausa.innerHTML = `<i class="bi bi-play"></i></button> `;
  botonInicioPausa.classList.remove("pausar");
  botonInicioPausa.classList.add("iniciar");
  estadoCronometro = "pausado";
});
