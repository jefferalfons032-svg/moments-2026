```javascript
/* =========================================
   FECHA DE INICIO
   01/09/2023
========================================= */

const fechaInicio = new Date(2023, 8, 1, 0, 0, 0);


/* =========================================
   CONTADOR
========================================= */

function actualizarContador() {

    const ahora = new Date();

    let años = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();

    if (
        ahora.getDate() < fechaInicio.getDate()
    ) {
        meses--;
    }

    if (meses < 0) {
        años--;
        meses += 12;
    }

    const fechaTemporal = new Date(fechaInicio);

    fechaTemporal.setFullYear(
        fechaInicio.getFullYear() + años
    );

    fechaTemporal.setMonth(
        fechaInicio.getMonth() + meses
    );

    const diferencia =
        ahora.getTime() -
        fechaTemporal.getTime();

    const dias = Math.floor(
        diferencia / 86400000
    );

    const horas = Math.floor(
        (diferencia % 86400000) / 3600000
    );

    const minutos = Math.floor(
        (diferencia % 3600000) / 60000
    );

    const segundos = Math.floor(
        (diferencia % 60000) / 1000
    );


    document.getElementById("years").textContent = años;

    document.getElementById("months").textContent = meses;

    document.getElementById("days").textContent = dias;

    document.getElementById("hours").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(segundos).padStart(2, "0");


    const frase =
        document.getElementById("timePhrase");

    if (frase) {

        frase.textContent =
            "¡Tres años y todavía te elegiría una y mil veces! ❤️";

    }


    actualizarProximoAniversario();
}


/* =========================================
   PRÓXIMO ANIVERSARIO
========================================= */

function actualizarProximoAniversario() {

    const ahora = new Date();

    let proximo = new Date(
        ahora.getFullYear(),
        8,
        1,
        0,
        0,
        0
    );

    if (ahora >= proximo) {
        proximo.setFullYear(
            proximo.getFullYear() + 1
        );
    }


    const añoAnterior =
        proximo.getFullYear() - 1;

    const inicio = new Date(
        añoAnterior,
        8,
        1,
        0,
        0,
        0
    );


    const total =
        proximo.getTime() -
        inicio.getTime();

    const recorrido =
        ahora.getTime() -
        inicio.getTime();


    let porcentaje =
        (recorrido / total) * 100;


    porcentaje =
        Math.max(
            0,
            Math.min(100, porcentaje)
        );


    const barra =
        document.getElementById("progressBar");

    if (barra) {
        barra.style.width =
            porcentaje + "%";
    }


    const fecha =
        document.getElementById("nextDate");

    if (fecha) {

        fecha.textContent =
            "01 · 09 · " +
            proximo.getFullYear();

    }


    const texto =
        document.getElementById("progressText");

    if (texto) {

        const dias =
            Math.ceil(
                (
                    proximo.getTime() -
                    ahora.getTime()
                ) /
                86400000
            );

        texto.textContent =
            "Faltan " +
            dias +
            " días para nuestro próximo aniversario. ❤️";
    }
}


/* =========================================
   BOTÓN DE INICIO
========================================= */

const startButton =
    document.getElementById("startButton");


if (startButton) {

    startButton.addEventListener(
        "click",
        function () {

            const seccion =
                document.querySelector(".time-section");

            if (seccion) {

                seccion.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );
}


/* =========================================
   BOTÓN SORPRESA
========================================= */

const surpriseButton =
    document.getElementById("surpriseButton");

const finalMessage =
    document.getElementById("finalMessage");


if (surpriseButton) {

    surpriseButton.addEventListener(
        "click",
        function () {

            if (finalMessage) {

                finalMessage.classList.remove(
                    "hidden"
                );

                surpriseButton.style.display =
                    "none";

                lluviaCorazones();

                setTimeout(
                    function () {

                        finalMessage.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    },
                    300
                );
            }

        }
    );
}


/* =========================================
   CORAZONES
========================================= */

const hearts =
    document.getElementById("hearts");


function crearCorazon() {

    if (!hearts) return;

    const corazon =
        document.createElement("span");

    corazon.className =
        "floating-heart";

    corazon.textContent =
        Math.random() > .5
            ? "♥"
            : "♡";

    corazon.style.left =
        Math.random() * 100 + "vw";

    corazon.style.fontSize =
        (10 + Math.random() * 18) + "px";

    corazon.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    hearts.appendChild(corazon);


    setTimeout(
        function () {

            corazon.remove();

        },
        12000
    );
}


function lluviaCorazones() {

    for (let i = 0; i < 40; i++) {

        setTimeout(
            crearCorazon,
            i * 80
        );

    }
}


/* =========================================
   CORAZONES AUTOMÁTICOS
========================================= */

setInterval(
    crearCorazon,
    1200
);


/* =========================================
   INICIAR
========================================= */

actualizarContador();


/* =========================================
   IMPORTANTE:
   NO OCULTAMOS NINGUNA SECCIÓN
========================================= */

document
    .querySelectorAll(".reveal")
    .forEach(function (elemento) {

        elemento.style.opacity = "1";
        elemento.style.visibility = "visible";
        elemento.style.transform = "none";

    });
```
