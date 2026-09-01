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
   CONTADOR REAL
========================================= */

function actualizarContador() {

    const ahora = new Date();

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


    const fechaMes =
        new Date(aniversario);


    fechaMes.setMonth(
        fechaMes.getMonth() + meses
    );


    const diferencia =
        ahora.getTime() -
        fechaMes.getTime();


    const dias =
        Math.floor(
            diferencia / 86400000
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
        document.getElementById(
            "years"
        );


    const months =
        document.getElementById(
            "months"
        );


    const days =
        document.getElementById(
            "days"
        );


    const hours =
        document.getElementById(
            "hours"
        );


    const minutes =
        document.getElementById(
            "minutes"
        );


    const seconds =
        document.getElementById(
            "seconds"
        );


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
   CORAZONES
========================================= */

const hearts =
    document.getElementById(
        "hearts"
    );


function crearCorazon() {

    if (!hearts) {
        return;
    }


    const heart =
        document.createElement(
            "span"
        );


    heart.className =
        "floating-heart";


    heart.textContent =
        Math.random() > 0.5
            ? "♥"
            : "♡";


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        (
            10 +
            Math.random() * 20
        ) +
        "px";


    heart.style.animationDuration =
        (
            6 +
            Math.random() * 7
        ) +
        "s";


    hearts.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },
        15000
    );
}


/* =========================================
   LLUVIA INICIAL
========================================= */

function lluviaInicial() {

    for (
        let i = 0;
        i < 18;
        i++
    ) {

        setTimeout(
            crearCorazon,
            i * 250
        );

    }

}


/* =========================================
   INICIAR
========================================= */

actualizarContador();

lluviaInicial();


setInterval(
    actualizarContador,
    1000
);


setInterval(
    crearCorazon,
    2400
);
```
