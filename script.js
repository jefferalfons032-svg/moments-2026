```javascript
// ==========================================
// CONFIGURACIÓN
// ==========================================

const PASSWORD = "01092023";

const fechaInicio = new Date(2023, 8, 1, 0, 0, 0);


// ==========================================
// ELEMENTOS
// ==========================================

const loginScreen = document.getElementById("loginScreen");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");


// ==========================================
// ENTRAR
// ==========================================

function entrar() {

    const clave = passwordInput.value.trim();

    console.log("Clave ingresada:", clave);
    console.log("Clave correcta:", PASSWORD);

    if (clave === PASSWORD) {

        console.log("CONTRASEÑA CORRECTA ❤️");

        loginScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");

        errorMessage.textContent = "";

        actualizarContador();
        iniciarCorazones();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        console.log("CONTRASEÑA INCORRECTA ❌");

        errorMessage.textContent =
            "Código incorrecto ❤️ Intenta nuevamente.";

        passwordInput.value = "";

        passwordInput.focus();

        passwordInput.classList.remove("shake");

        setTimeout(() => {
            passwordInput.classList.add("shake");
        }, 10);

        setTimeout(() => {
            passwordInput.classList.remove("shake");
        }, 500);
    }
}


// ==========================================
// ENTER DEL TECLADO
// ==========================================

passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        entrar();
    }

});


// ==========================================
// MOSTRAR CARTA
// ==========================================

function mostrarCarta() {

    const carta = document.getElementById("carta");

    carta.classList.remove("hidden");

    setTimeout(() => {

        carta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

}


// ==========================================
// SORPRESA FINAL
// ==========================================

function sorpresa() {

    const mensaje = document.getElementById("mensajeFinal");

    mensaje.classList.remove("hidden");

    setTimeout(() => {

        mensaje.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

}


// ==========================================
// CONTADOR
// ==========================================

function actualizarContador() {

    const ahora = new Date();

    let diferencia = ahora - fechaInicio;

    if (diferencia < 0) {
        diferencia = 0;
    }

    const segundosTotales =
        Math.floor(diferencia / 1000);

    const dias =
        Math.floor(segundosTotales / 86400);

    const horas =
        Math.floor(
            (segundosTotales % 86400) / 3600
        );

    const minutos =
        Math.floor(
            (segundosTotales % 3600) / 60
        );

    const segundos =
        segundosTotales % 60;


    // IDs CORRECTOS DEL HTML

    const diasElemento =
        document.getElementById("days");

    const horasElemento =
        document.getElementById("hours");

    const minutosElemento =
        document.getElementById("minutes");

    const segundosElemento =
        document.getElementById("seconds");


    if (diasElemento) {
        diasElemento.textContent = dias;
    }

    if (horasElemento) {
        horasElemento.textContent = horas;
    }

    if (minutosElemento) {
        minutosElemento.textContent = minutos;
    }

    if (segundosElemento) {
        segundosElemento.textContent = segundos;
    }

}

setInterval(actualizarContador, 1000);


// ==========================================
// CORAZONES
// ==========================================

let corazonesIniciados = false;


function iniciarCorazones() {

    if (corazonesIniciados) {
        return;
    }

    corazonesIniciados = true;

    setInterval(crearCorazon, 900);

}


function crearCorazon() {

    const corazon =
        document.createElement("div");

    corazon.className = "heart";

    corazon.innerHTML = "♥";

    corazon.style.left =
        Math.random() * 100 + "vw";

    corazon.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    corazon.style.fontSize =
        (12 + Math.random() * 20) + "px";


    const heartsContainer =
        document.querySelector(".hearts");

    if (heartsContainer) {

        heartsContainer.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 8000);

    }

}
```
