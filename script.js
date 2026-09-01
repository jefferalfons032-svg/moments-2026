```javascript
document.addEventListener("DOMContentLoaded", function () {

    const PASSWORD = "01092023";

    const fechaInicio = new Date(2023, 8, 1, 0, 0, 0);

    const loginScreen = document.getElementById("loginScreen");
    const mainContent = document.getElementById("mainContent");
    const passwordInput = document.getElementById("passwordInput");
    const errorMessage = document.getElementById("errorMessage");
    const enterButton = document.getElementById("enterButton");

    // ==========================================
    // CONTRASEÑA
    // ==========================================

    function entrar() {

        const clave = passwordInput.value.trim();

        if (clave === PASSWORD) {

            loginScreen.style.display = "none";
            mainContent.classList.remove("hidden");

            errorMessage.textContent = "";

            actualizarContador();
            iniciarCorazones();

        } else {

            errorMessage.textContent =
                "Código incorrecto ❤️ Intenta nuevamente.";

            passwordInput.value = "";

            passwordInput.focus();

        }

    }

    // Botón
    enterButton.addEventListener("click", entrar);

    // Tecla Enter
    passwordInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            entrar();
        }

    });


    // ==========================================
    // CARTA
    // ==========================================

    const botonCarta =
        document.querySelector(".hero button");

    const carta =
        document.getElementById("carta");

    botonCarta.addEventListener("click", function () {

        carta.classList.remove("hidden");

        carta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });


    // ==========================================
    // SORPRESA
    // ==========================================

    const botonSorpresa =
        document.querySelector(".final button");

    const mensajeFinal =
        document.getElementById("mensajeFinal");

    botonSorpresa.addEventListener("click", function () {

        mensajeFinal.classList.remove("hidden");

        mensajeFinal.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });


    // ==========================================
    // CONTADOR
    // ==========================================

    function actualizarContador() {

        const ahora = new Date();

        const diferencia =
            Math.max(0, ahora - fechaInicio);

        const totalSegundos =
            Math.floor(diferencia / 1000);

        const dias =
            Math.floor(totalSegundos / 86400);

        const horas =
            Math.floor(
                (totalSegundos % 86400) / 3600
            );

        const minutos =
            Math.floor(
                (totalSegundos % 3600) / 60
            );

        const segundos =
            totalSegundos % 60;


        document.getElementById("days").textContent =
            dias;

        document.getElementById("hours").textContent =
            horas;

        document.getElementById("minutes").textContent =
            minutos;

        document.getElementById("seconds").textContent =
            segundos;

    }

    setInterval(actualizarContador, 1000);


    // ==========================================
    // CORAZONES
    // ==========================================

    let corazonesActivos = false;

    function iniciarCorazones() {

        if (corazonesActivos) return;

        corazonesActivos = true;

        setInterval(function () {

            const contenedor =
                document.querySelector(".hearts");

            const corazon =
                document.createElement("div");

            corazon.className = "heart";

            corazon.textContent = "♥";

            corazon.style.left =
                Math.random() * 100 + "vw";

            corazon.style.fontSize =
                (12 + Math.random() * 20) + "px";

            corazon.style.animationDuration =
                (4 + Math.random() * 4) + "s";

            contenedor.appendChild(corazon);

            setTimeout(function () {
                corazon.remove();
            }, 8000);

        }, 900);

    }

});
```
