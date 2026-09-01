```javascript
/* =========================================
   ❤️ CONTADOR DE NUESTRA HISTORIA
========================================= */

const fechaInicio = new Date(
    2023,
    8,
    1,
    0,
    0,
    0
);


/* =========================================
   CONTADOR
========================================= */

function actualizarContador() {

    const ahora = new Date();

    let años =
        ahora.getFullYear() -
        fechaInicio.getFullYear();

    let meses =
        ahora.getMonth() -
        fechaInicio.getMonth();

    let fechaTemporal =
        new Date(fechaInicio);

    fechaTemporal.setFullYear(
        fechaInicio.getFullYear() + años
    );

    fechaTemporal.setMonth(
        fechaInicio.getMonth() + meses
    );


    if (fechaTemporal > ahora) {

        meses--;

        fechaTemporal =
            new Date(fechaInicio);

        fechaTemporal.setFullYear(
            fechaInicio.getFullYear() + años
        );

        fechaTemporal.setMonth(
            fechaInicio.getMonth() + meses
        );
    }


    const diferencia =
        ahora.getTime() -
        fechaTemporal.getTime();


    const dias =
        Math.floor(
            diferencia /
            86400000
        );


    const horas =
        Math.floor(
            (diferencia % 86400000) /
            3600000
        );


    const minutos =
        Math.floor(
            (diferencia % 3600000) /
            60000
        );


    const segundos =
        Math.floor(
            (diferencia % 60000) /
            1000
        );


    const years =
        document.getElementById("years");

    const months =
        document.getElementById("months");

    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");

    const seconds =
        document.getElementById("seconds");


    if (years)
        years.textContent = años;

    if (months)
        months.textContent = meses;

    if (days)
        days.textContent = dias;

    if (hours)
        hours.textContent =
            String(horas).padStart(2, "0");

    if (minutes)
        minutes.textContent =
            String(minutos).padStart(2, "0");

    if (seconds)
        seconds.textContent =
            String(segundos).padStart(2, "0");
}


/* =========================================
   ❤️ FRASE
========================================= */

const timePhrase =
    document.getElementById("timePhrase");

if (timePhrase) {

    timePhrase.textContent =
        "Cada segundo contigo es un segundo que quiero guardar para siempre. ❤️";
}


/* =========================================
   ↓ BOTÓN NUESTRA HISTORIA
========================================= */

const startButton =
    document.getElementById("startButton");

if (startButton) {

    startButton.addEventListener(
        "click",
        function () {

            const destino =
                document.querySelector(
                    ".counter-section"
                );

            if (destino) {

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );
}


/* =========================================
   🎁 LA SORPRESA
========================================= */

const surpriseButton =
    document.getElementById(
        "surpriseButton"
    );

const finalMessage =
    document.getElementById(
        "finalMessage"
    );


if (
    surpriseButton &&
    finalMessage
) {

    surpriseButton.addEventListener(
        "click",
        function () {

            /* mostrar carta */

            finalMessage.classList.add(
                "show"
            );


            /* esconder botón */

            surpriseButton.style.display =
                "none";


            /* corazones */

            lluviaDeCorazones();


            /* bajar suavemente */

            setTimeout(
                function () {

                    finalMessage.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                },
                200
            );

        }
    );
}


/* =========================================
   ❤️ CORAZONES
========================================= */

const hearts =
    document.getElementById(
        "hearts"
    );


function crearCorazon() {

    if (!hearts)
        return;


    const corazon =
        document.createElement(
            "span"
        );


    corazon.className =
        "floating-heart";


    corazon.textContent =
        Math.random() > .5
            ? "♥"
            : "♡";


    corazon.style.left =
        Math.random() * 100 +
        "vw";


    corazon.style.fontSize =
        (
            10 +
            Math.random() * 18
        ) +
        "px";


    corazon.style.animationDuration =
        (
            5 +
            Math.random() * 6
        ) +
        "s";


    hearts.appendChild(
        corazon
    );


    setTimeout(
        function () {

            corazon.remove();

        },
        13000
    );
}


/* =========================================
   🌧️ LLUVIA DE CORAZONES
========================================= */

function lluviaDeCorazones() {

    for (
        let i = 0;
        i < 70;
        i++
    ) {

        setTimeout(
            crearCorazon,
            i * 60
        );

    }
}


/* corazones normales */

setInterval(
    crearCorazon,
    1800
);


/* =========================================
   🚀 INICIAR
========================================= */

actualizarContador();


setInterval(
    actualizarContador,
    1000
);
```
