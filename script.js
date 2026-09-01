```javascript
// ==========================================
// CONFIGURACIÓN
// ==========================================

// 🔐 CAMBIA AQUÍ LA CONTRASEÑA
const PASSWORD = "jeffydany";

// ❤️ FECHA EN QUE COMENZÓ LA RELACIÓN
// Año, mes, día
// IMPORTANTE: enero = 0, septiembre = 8
const fechaInicio = new Date(2023, 8, 1, 0, 0, 0);


// ==========================================
// ENTRAR CON CONTRASEÑA
// ==========================================

function entrar() {

    const input = document.getElementById("passwordInput");
    const error = document.getElementById("errorMessage");

    const password = input.value.trim();

    if (password === PASSWORD) {

        // Ocultar pantalla de contraseña
        document.getElementById("loginScreen").style.display = "none";

        // Mostrar página
        document.getElementById("mainContent").classList.remove("hidden");

        // Iniciar corazones
        iniciarCorazones();

        // Actualizar contador
        actualizarContador();

        // Llevar al inicio
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        error.textContent =
            "Ese no es nuestro secreto... 🥺❤️";

        input.value = "";

        input.focus();

        // Animación de error
        input.style.transform = "translateX(5px)";

        setTimeout(() => {
            input.style.transform = "translateX(-5px)";
        }, 80);

        setTimeout(() => {
            input.style.transform = "translateX(0)";
        }, 160);
    }
}


// ==========================================
// ENTER EN EL CAMPO DE CONTRASEÑA
// ==========================================

document
    .getElementById("passwordInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            entrar();
        }

    });


// ==========================================
// ABRIR CARTA
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

    const mensaje =
        document.getElementById("mensajeFinal");

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

    let diferencia =
        ahora.getTime() -
        fechaInicio.getTime();

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


    document.getElementById("days")
        .textContent = dias.toLocaleString("es-CO");

    document.getElementById("hours")
        .textContent = horas;

    document.getElementById("minutes")
        .textContent = minutos;

    document.getElementById("seconds")
        .textContent = segundos;
}


// ==========================================
// ACTUALIZAR CONTADOR CADA SEGUNDO
// ==========================================

setInterval(actualizarContador, 1000);


// ==========================================
// CORAZONES
// ==========================================

let intervaloCorazones = null;

function crearCorazon() {

    const contenedor =
        document.querySelector(".hearts");

    if (!contenedor) return;

    const corazon =
        document.createElement("div");

    corazon.classList.add("heart");

    corazon.innerHTML = "♥";

    // Posición horizontal
    corazon.style.left =
        Math.random() * 100 + "%";

    // Tamaño
    const tamanio =
        Math.random() * 18 + 12;

    corazon.style.fontSize =
        tamanio + "px";

    // Velocidad
    const duracion =
        Math.random() * 5 + 5;

    corazon.style.animationDuration =
        duracion + "s";

    // Transparencia
    corazon.style.opacity =
        Math.random() * 0.5 + 0.3;

    contenedor.appendChild(corazon);


    // Eliminar cuando termine
    setTimeout(() => {

        corazon.remove();

    }, duracion * 1000);
}


// ==========================================
// INICIAR CORAZONES
// ==========================================

function iniciarCorazones() {

    // Crear algunos inmediatamente
    for (let i = 0; i < 8; i++) {

        setTimeout(() => {
            crearCorazon();
        }, i * 300);

    }

    // Evitar iniciar el intervalo dos veces
    if (intervaloCorazones === null) {

        intervaloCorazones =
            setInterval(crearCorazon, 500);

    }
}
```
