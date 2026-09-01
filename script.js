```javascript
const PASSWORD = "01092023";

const fechaInicio = new Date(2023, 8, 1, 0, 0, 0);

const loginScreen = document.getElementById("loginScreen");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");

function entrar() {
    const clave = passwordInput.value.trim();

    if (clave === PASSWORD) {
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
        errorMessage.textContent = "Código incorrecto ❤️ Intenta nuevamente.";

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

passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        entrar();
    }
});

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

function actualizarContador() {
    const ahora = new Date();

    let diferencia = ahora - fechaInicio;

    if (diferencia < 0) {
        diferencia = 0;
    }

    const segundosTotales = Math.floor(diferencia / 1000);

    const dias = Math.floor(segundosTotales / 86400);
    const horas = Math.floor((segundosTotales % 86400) / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;

    const diasElemento = document.getElementById("dias");
    const horasElemento = document.getElementById("horas");
    const minutosElemento = document.getElementById("minutos");
    const segundosElemento = document.getElementById("segundos");

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

let corazonesIniciados = false;

function iniciarCorazones() {
    if (corazonesIniciados) return;

    corazonesIniciados = true;

    setInterval(crearCorazon, 900);
}

function crearCorazon() {
    const corazon = document.createElement("div");

    corazon.className = "corazon-flotante";
    corazon.innerHTML = "♥";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = (4 + Math.random() * 4) + "s";
    corazon.style.fontSize = (12 + Math.random() * 20) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 8000);
}
```
