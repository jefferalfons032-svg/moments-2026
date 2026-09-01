```javascript
/* =========================================
   FECHA DE INICIO
========================================= */

const inicio = new Date(2023, 8, 1, 0, 0, 0);


/* =========================================
   CONTADOR
========================================= */

function actualizarContador() {

    const ahora = new Date();

    let años =
        ahora.getFullYear() -
        inicio.getFullYear();

    let meses =
        ahora.getMonth() -
        inicio.getMonth();

    let fechaBase =
        new Date(inicio);

    fechaBase.setFullYear(
        inicio.getFullYear() + años
    );

    fechaBase.setMonth(
        inicio.getMonth() + meses
    );


    if (fechaBase > ahora) {

        meses--;

        fechaBase =
            new Date(inicio);

        fechaBase.setFullYear(
            inicio.getFullYear() + años
        );

        fechaBase.setMonth(
            inicio.getMonth() + meses
        );
    }


    const diferencia =
        ahora - fechaBase;


    const dias =
        Math.floor(
            diferencia / 86400000
        );


    const horas =
        Math.floor(
            (diferencia % 86400000)
            / 3600000
        );


    const minutos =
        Math.floor(
            (diferencia % 3600000)
            / 60000
        );


    const segundos =
        Math.floor(
            (diferencia % 60000)
            / 1000
        );


    document.getElementById("years").textContent =
        años;

    document.getElementById("months").textContent =
        meses;

    document.getElementById("days").textContent =
        dias;

    document.getElementById("hours").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(segundos).padStart(2, "0");


    document.getElementById("timePhrase").textContent =
        "Tres años después, sigues siendo mi lugar favorito. ❤️";
}


/* =========================================
   PRÓXIMO ANIVERSARIO
========================================= */

function actualizarProximoAniversario() {

    const ahora = new Date();

    let año =
        ahora.getFullYear();

    let proximo =
        new Date(
            año,
            8,
            1,
            0,
            0,
            0
        );


    if (ahora >= proximo) {

        proximo.setFullYear(
            año + 1
        );
    }


    const dias =
        Math.ceil(
            (proximo - ahora)
            / 86400000
        );


    console.log(
        "Próximo aniversario:",
        dias,
        "días"
    );
}


/* =========================================
   BOTÓN PRINCIPAL
========================================= */

const startButton =
    document.getElementById(
        "startButton"
    );


if (startButton) {

    startButton.onclick =
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

        };
}


/* =========================================
   SORPRESA
========================================= */

const surpriseButton =
    document.getElementById(
        "surpriseButton"
    );

const finalMessage =
    document.getElementById(
        "finalMessage"
    );


if (surpriseButton) {

    surpriseButton.onclick =
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

        };
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
        Math.random() * 100 + "vw";


    corazon.style.fontSize =
        10 +
        Math.random() * 18 +
        "px";


    corazon.style.animationDuration =
        5 +
        Math.random() * 6 +
        "s";


    hearts.appendChild(
        corazon
    );


    setTimeout(
        function () {

            corazon.remove();

        },
        12000
    );
}


/* =========================================
   LLUVIA DE CORAZONES
========================================= */

function lluviaDeCorazones() {

    for (
        let i = 0;
        i < 50;
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
    1500
);


/* =========================================
   ARRANCAR
========================================= */

actualizarContador();

actualizarProximoAniversario();

setInterval(
    actualizarContador,
    1000
);
```
