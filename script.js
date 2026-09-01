```javascript
/* =========================================
   ❤️ HISTORIA DE DANY Y JEFFERSON
   INICIO: 01/09/2023
========================================= */

const fechaInicio = new Date(2023, 8, 1, 0, 0, 0);


/* =========================================
   ELEMENTOS
========================================= */

const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const timePhrase =
    document.getElementById("timePhrase");

const startButton =
    document.getElementById("startButton");

const surpriseButton =
    document.getElementById("surpriseButton");

const finalMessage =
    document.getElementById("finalMessage");

const hearts =
    document.getElementById("hearts");


/* =========================================
   ❤️ CONTADOR EXACTO
========================================= */

function calcularTiempo() {

    const ahora = new Date();

    let años =
        ahora.getFullYear() -
        fechaInicio.getFullYear();

    let meses =
        ahora.getMonth() -
        fechaInicio.getMonth();

    let fechaBase =
        new Date(fechaInicio);


    fechaBase.setFullYear(
        fechaInicio.getFullYear() + años
    );

    fechaBase.setMonth(
        fechaInicio.getMonth() + meses
    );


    if (fechaBase > ahora) {

        meses--;

        fechaBase =
            new Date(fechaInicio);

        fechaBase.setFullYear(
            fechaInicio.getFullYear() + años
        );

        fechaBase.setMonth(
            fechaInicio.getMonth() + meses
        );
    }


    const diferencia =
        ahora.getTime() -
        fechaBase.getTime();


    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (
                diferencia %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutos =
        Math.floor(
            (
                diferencia %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const segundos =
        Math.floor(
            (
                diferencia %
                (1000 * 60)
            ) /
            1000
        );


    return {
        años,
        meses,
        dias,
        horas,
        minutos,
        segundos
    };
}


/* =========================================
   ⏱️ ACTUALIZAR CONTADOR
========================================= */

function actualizarContador() {

    const tiempo =
        calcularTiempo();


    years.textContent =
        tiempo.años;

    months.textContent =
        tiempo.meses;

    days.textContent =
        tiempo.dias;

    hours.textContent =
        String(tiempo.horas)
            .padStart(2, "0");

    minutes.textContent =
        String(tiempo.minutos)
            .padStart(2, "0");

    seconds.textContent =
        String(tiempo.segundos)
            .padStart(2, "0");


    /* Frase */

    if (timePhrase) {

        timePhrase.textContent =
            "Cada segundo contigo se convierte en un recuerdo que quiero conservar para siempre. ❤️";

    }
}


/* =========================================
   📅 PRÓXIMO ANIVERSARIO
========================================= */

function actualizarProximoAniversario() {

    const ahora = new Date();

    let proximo =
        new Date(
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


    const diasRestantes =
        Math.ceil(
            (
                proximo.getTime() -
                ahora.getTime()
            ) /
            (1000 * 60 * 60 * 24)
        );


    const texto =
        document.getElementById(
            "progressText"
        );


    const fecha =
        document.getElementById(
            "nextDate"
        );


    const barra =
        document.getElementById(
            "progressBar"
        );


    if (fecha) {

        fecha.textContent =
            "01 · 09 · " +
            proximo.getFullYear();

    }


    if (texto) {

        texto.textContent =
            "Faltan " +
            diasRestantes +
            " días para volver a celebrar nuestro amor. ❤️";

    }


    if (barra) {

        const inicioPeriodo =
            new Date(
                proximo.getFullYear() - 1,
                8,
                1
            );


        const total =
            proximo.getTime() -
            inicioPeriodo.getTime();


        const recorrido =
            ahora.getTime() -
            inicioPeriodo.getTime();


        const porcentaje =
            Math.min(
                100,
                Math.max(
                    0,
                    (recorrido / total) * 100
                )
            );


        barra.style.width =
            porcentaje + "%";
    }
}


/* =========================================
   💕 BOTÓN PRINCIPAL
========================================= */

if (startButton) {

    startButton.addEventListener(
        "click",
        function () {

            const contador =
                document.querySelector(
                    ".counter-section"
                );


            if (contador) {

                contador.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );
}


/* =========================================
   🎁 SORPRESA
========================================= */

if (surpriseButton) {

    surpriseButton.addEventListener(
        "click",
        function () {

            if (!finalMessage) {
                return;
            }


            finalMessage.classList.remove(
                "hidden"
            );


            surpriseButton.style.display =
                "none";


            lluviaDeCorazones();


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
    );
}


/* =========================================
   ❤️ CORAZONES
========================================= */

function crearCorazon() {

    if (!hearts) {
        return;
    }


    const corazon =
        document.createElement("span");


    corazon.className =
        "floating-heart";


    corazon.textContent =
        Math.random() > 0.5
            ? "♥"
            : "♡";


    corazon.style.left =
        Math.random() * 100 +
        "vw";


    corazon.style.fontSize =
        10 +
        Math.random() * 18 +
        "px";


    corazon.style.animationDuration =
        5 +
        Math.random() * 7 +
        "s";


    hearts.appendChild(
        corazon
    );


    setTimeout(
        function () {

            corazon.remove();

        },
        14000
    );
}


/* =========================================
   🌧️ LLUVIA DE CORAZONES
========================================= */

function lluviaDeCorazones() {

    for (
        let i = 0;
        i < 55;
        i++
    ) {

        setTimeout(
            crearCorazon,
            i * 70
        );

    }
}


/* =========================================
   CORAZONES AUTOMÁTICOS
========================================= */

setInterval(
    crearCorazon,
    1700
);


/* =========================================
   🚀 INICIO
========================================= */

actualizarContador();

actualizarProximoAniversario();


setInterval(
    actualizarContador,
    1000
);


setInterval(
    actualizarProximoAniversario,
    60000
);
```
