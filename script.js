/* =========================================
   ❤️ DANY + JEFFERSON
   01/09/2023 → HOY
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
   ❤️ CONTADOR
========================================= */

function actualizarContador() {

    const ahora = new Date();

    let años =
        ahora.getFullYear() -
        fechaInicio.getFullYear();

    let fechaAniversario =
        new Date(fechaInicio);

    fechaAniversario.setFullYear(
        fechaInicio.getFullYear() + años
    );


    if (fechaAniversario > ahora) {

        años--;

        fechaAniversario =
            new Date(fechaInicio);

        fechaAniversario.setFullYear(
            fechaInicio.getFullYear() + años
        );
    }


    let meses =
        ahora.getMonth() -
        fechaAniversario.getMonth();


    if (
        ahora.getDate() <
        fechaAniversario.getDate()
    ) {
        meses--;
    }


    if (meses < 0) {
        meses += 12;
    }


    const fechaMes =
        new Date(fechaAniversario);

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
        years.textContent = años;
    }


    if (months) {
        months.textContent = meses;
    }


    if (days) {
        days.textContent = dias;
    }


    if (hours) {
        hours.textContent =
            String(horas).padStart(2, "0");
    }


    if (minutes) {
        minutes.textContent =
            String(minutos).padStart(2, "0");
    }


    if (seconds) {
        seconds.textContent =
            String(segundos).padStart(2, "0");
    }
}


/* =========================================
   💕 NUESTRA HISTORIA
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
   ❤️ CORAZONES FLOTANDO
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
        Math.random() > 0.5
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
   ❤️ LLUVIA DE CORAZONES
========================================= */

function lluviaDeCorazones() {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        setTimeout(
            crearCorazon,
            i * 80
        );

    }
}


/* =========================================
   🚀 INICIAR
========================================= */

actualizarContador();


setInterval(
    actualizarContador,
    1000
);


setInterval(
    crearCorazon,
    2200
);


/* Corazones iniciales */

setTimeout(
    lluviaDeCorazones,
    1000
);
