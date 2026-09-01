```javascript
/* =========================================
   ❤️ DANY + JEFFERSON
   01/09/2023 → HOY
========================================= */


/* =========================================
   FECHA DE INICIO
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
   CONTADOR EN TIEMPO REAL
========================================= */

function actualizarContador() {

    const ahora = new Date();


    /* AÑOS */

    let años =
        ahora.getFullYear() -
        fechaInicio.getFullYear();


    let aniversario =
        new Date(fechaInicio);

    aniversario.setFullYear(
        fechaInicio.getFullYear() + años
    );


    if (aniversario > ahora) {

        años--;

        aniversario =
            new Date(fechaInicio);

        aniversario.setFullYear(
            fechaInicio.getFullYear() + años
        );
    }


    /* MESES */

    let meses =
        ahora.getMonth() -
        aniversario.getMonth();


    if (
        ahora.getDate() <
        aniversario.getDate()
    ) {

        meses--;

    }


    if (meses < 0) {

        meses += 12;

    }


    /* FECHA DESPUÉS DE AÑOS + MESES */

    const fechaMes =
        new Date(aniversario);

    fechaMes.setMonth(
        fechaMes.getMonth() + meses
    );


    /* DIFERENCIA */

    const diferencia =
        ahora.getTime() -
        fechaMes.getTime();


    /* DÍAS */

    const dias =
        Math.floor(
            diferencia /
            86400000
        );


    /* HORAS */

    const horas =
        Math.floor(
            (diferencia % 86400000) /
            3600000
        );


    /* MINUTOS */

    const minutos =
        Math.floor(
            (diferencia % 3600000) /
            60000
        );


    /* SEGUNDOS */

    const segundos =
        Math.floor(
            (diferencia % 60000) /
            1000
        );


    /* =====================================
       MOSTRAR
    ====================================== */

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


    if (years) {

        years.textContent =
            años;

    }


    if (months) {

        months.textContent =
            meses;

    }


    if (days) {

        days.textContent =
            dias;

    }


    if (hours) {

        hours.textContent =
            String(horas)
                .padStart(2, "0");

    }


    if (minutes) {

        minutes.textContent =
            String(minutos)
                .padStart(2, "0");

    }


    if (seconds) {

        seconds.textContent =
            String(segundos)
                .padStart(2, "0");

    }
}


/* =========================================
   BOTÓN NUESTRA HISTORIA
========================================= */

const historyButton =
    document.getElementById(
        "historyButton"
    );


if (historyButton) {

    historyButton.addEventListener(
        "click",
        function () {

            const contador =
                document.getElementById(
                    "contador"
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
   🎁 BOTÓN DE SORPRESA
========================================= */

const surpriseButton =
    document.getElementById(
        "surpriseButton"
    );

const finalMessage =
    document.getElementById(
        "finalMessage"
    );


/*
   COMPROBAMOS QUE LOS DOS EXISTAN.
*/

if (
    surpriseButton &&
    finalMessage
) {

    surpriseButton.addEventListener(
        "click",
        function () {

            /*
               MOSTRAR SORPRESA
            */

            finalMessage.classList.add(
                "open"
            );


            /*
               OCULTAR BOTÓN
            */

            surpriseButton.style.display =
                "none";


            /*
               LLUVIA DE CORAZONES
            */

            lluviaDeCorazones();


            /*
               DESPLAZAMIENTO SUAVE
            */

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

const hearts =
    document.getElementById(
        "hearts"
    );


function crearCorazon() {

    if (!hearts) {

        return;

    }


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
            i * 55
        );

    }
}


/* =========================================
   CORAZONES SUAVES
========================================= */

setInterval(
    crearCorazon,
    2200
);


/* =========================================
   🚀 INICIAR
========================================= */

actualizarContador();


/*
   Actualización cada segundo.

   El contador nunca queda congelado.
*/

setInterval(
    actualizarContador,
    1000
);
```
