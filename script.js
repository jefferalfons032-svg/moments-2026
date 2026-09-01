```javascript
/* =====================================================
   FECHA DE INICIO
===================================================== */

const fechaInicio = new Date(
    2023,
    8,
    1,
    0,
    0,
    0
);


/* =====================================================
   ELEMENTOS
===================================================== */

const yearsElement =
    document.getElementById("years");

const monthsElement =
    document.getElementById("months");

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const timePhrase =
    document.getElementById("timePhrase");

const progressBar =
    document.getElementById("progressBar");

const progressText =
    document.getElementById("progressText");

const nextDate =
    document.getElementById("nextDate");

const heartsContainer =
    document.getElementById("hearts");

const startButton =
    document.getElementById("startButton");

const surpriseButton =
    document.getElementById("surpriseButton");

const finalMessage =
    document.getElementById("finalMessage");


/* =====================================================
   BOTÓN PORTADA
===================================================== */

if (startButton) {

    startButton.addEventListener(
        "click",
        function () {

            const timeSection =
                document.querySelector(".time-section");

            if (timeSection) {

                timeSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =====================================================
   CALCULAR TIEMPO EXACTO
===================================================== */

function calcularTiempo() {

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


/* =====================================================
   ACTUALIZAR CONTADOR
===================================================== */

function actualizarContador() {

    const tiempo =
        calcularTiempo();


    yearsElement.textContent =
        tiempo.años;

    monthsElement.textContent =
        tiempo.meses;

    daysElement.textContent =
        tiempo.dias;

    hoursElement.textContent =
        String(tiempo.horas)
            .padStart(2, "0");

    minutesElement.textContent =
        String(tiempo.minutos)
            .padStart(2, "0");

    secondsElement.textContent =
        String(tiempo.segundos)
            .padStart(2, "0");


    actualizarFrase(
        tiempo
    );

    actualizarProximoAniversario();

}


actualizarContador();

setInterval(
    actualizarContador,
    1000
);


/* =====================================================
   FRASES DINÁMICAS
===================================================== */

function actualizarFrase(tiempo) {

    if (!timePhrase) {
        return;
    }


    if (tiempo.años >= 3) {

        timePhrase.textContent =
            "Tres años después, sigues siendo mi lugar favorito. ❤️";

        return;

    }

    if (tiempo.años >= 2) {

        timePhrase.textContent =
            "Más de dos años construyendo algo bonito juntos. ❤️";

        return;

    }

    if (tiempo.años >= 1) {

        timePhrase.textContent =
            "Más de un año de recuerdos que jamás cambiaría.";

        return;

    }

    timePhrase.textContent =
        "Cada segundo contigo cuenta. ❤️";

}


/* =====================================================
   PRÓXIMO ANIVERSARIO
===================================================== */

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


    const añoAnterior =
        proximo.getFullYear() - 1;


    const inicioPeriodo =
        new Date(
            añoAnterior,
            8,
            1,
            0,
            0,
            0
        );


    const totalPeriodo =
        proximo.getTime() -
        inicioPeriodo.getTime();


    const transcurrido =
        ahora.getTime() -
        inicioPeriodo.getTime();


    let progreso =
        (
            transcurrido /
            totalPeriodo
        ) * 100;


    progreso =
        Math.max(
            0,
            Math.min(
                100,
                progreso
            )
        );


    if (progressBar) {

        progressBar.style.width =
            progreso + "%";

    }


    if (nextDate) {

        nextDate.textContent =
            "01 · 09 · " +
            proximo.getFullYear();

    }


    if (progressText) {

        const diasRestantes =
            Math.ceil(
                (
                    proximo.getTime() -
                    ahora.getTime()
                ) /
                (1000 * 60 * 60 * 24)
            );


        if (diasRestantes === 1) {

            progressText.textContent =
                "¡Mañana celebramos otro capítulo! ❤️";

        } else {

            progressText.textContent =
                "Faltan " +
                diasRestantes +
                " días para nuestro próximo aniversario. ❤️";

        }

    }

}


/* =====================================================
   BOTÓN SORPRESA
===================================================== */

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


            lanzarCorazones(35);


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


/* =====================================================
   CORAZONES NORMALES
===================================================== */

function crearCorazon() {

    if (!heartsContainer) {
        return;
    }


    const heart =
        document.createElement("span");


    heart.className =
        "floating-heart";


    heart.textContent =
        Math.random() > .5
            ? "♥"
            : "♡";


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        (
            10 +
            Math.random() * 18
        ) +
        "px";


    heart.style.animationDuration =
        (
            6 +
            Math.random() * 7
        ) +
        "s";


    heart.style.opacity =
        .15 +
        Math.random() * .45;


    heartsContainer.appendChild(
        heart
    );


    setTimeout(
        function () {

            heart.remove();

        },
        14000
    );

}


setInterval(
    crearCorazon,
    900
);


/* =====================================================
   LLUVIA DE CORAZONES
===================================================== */

function lanzarCorazones(cantidad) {

    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        setTimeout(
            function () {

                crearCorazon();

            },
            i * 70
        );

    }

}


/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */

const elementosReveal =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


elementosReveal.forEach(
    function (elemento) {

        observer.observe(
            elemento
        );

    }
);


/* =====================================================
   CORAZÓN INICIAL
===================================================== */

for (
    let i = 0;
    i < 5;
    i++
) {

    setTimeout(
        crearCorazon,
        i * 400
    );

}
```
