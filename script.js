```javascript
/* =========================================
   ❤️ NUESTRA HISTORIA
   DANY + JEFFERSON
   DESDE: 01/09/2023
========================================= */


/* =========================================
   📅 FECHA DE INICIO
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
   ⏰ CONTADOR COMO RELOJ REAL
========================================= */

function actualizarContador() {

    const ahora = new Date();

    /*
       Calculamos primero los años completos
    */

    let años =
        ahora.getFullYear() -
        fechaInicio.getFullYear();


    /*
       Creamos una fecha que representa
       exactamente esos años cumplidos.
    */

    let fechaAniversario =
        new Date(fechaInicio);

    fechaAniversario.setFullYear(
        fechaInicio.getFullYear() + años
    );


    /*
       Si todavía no llegó al aniversario
       de este año, quitamos un año.
    */

    if (fechaAniversario > ahora) {

        años--;

        fechaAniversario =
            new Date(fechaInicio);

        fechaAniversario.setFullYear(
            fechaInicio.getFullYear() + años
        );
    }


    /*
       Ahora calculamos meses completos
    */

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


    /*
       Fecha después de años + meses
    */

    let fechaMes =
        new Date(fechaAniversario);

    fechaMes.setMonth(
        fechaMes.getMonth() + meses
    );


    /*
       Diferencia exacta desde la última
       fecha cumplida.
    */

    let diferencia =
        ahora.getTime() -
        fechaMes.getTime();


    /*
       Tiempo restante
    */

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


    /*
       Mostrar en pantalla
    */

    const elementoAños =
        document.getElementById("years");

    const elementoMeses =
        document.getElementById("months");

    const elementoDias =
        document.getElementById("days");

    const elementoHoras =
        document.getElementById("hours");

    const elementoMinutos =
        document.getElementById("minutes");

    const elementoSegundos =
        document.getElementById("seconds");


    if (elementoAños) {

        elementoAños.textContent =
            años;

    }


    if (elementoMeses) {

        elementoMeses.textContent =
            meses;

    }


    if (elementoDias) {

        elementoDias.textContent =
            dias;

    }


    if (elementoHoras) {

        elementoHoras.textContent =
            String(horas).padStart(2, "0");

    }


    if (elementoMinutos) {

        elementoMinutos.textContent =
            String(minutos).padStart(2, "0");

    }


    if (elementoSegundos) {

        elementoSegundos.textContent =
            String(segundos).padStart(2, "0");

    }
}


/* =========================================
   💕 FRASE
========================================= */

function actualizarFrase() {

    const frase =
        document.getElementById(
            "timePhrase"
        );

    if (frase) {

        frase.textContent =
            "Nuestro tiempo juntos sigue corriendo... y cada segundo contigo vale la pena. ❤️";

    }
}


/* =========================================
   ↓ BOTÓN NUESTRA HISTORIA
========================================= */

function irAHistoria() {

    const destino =
        document.querySelector(
            ".counter-section"
        );

    if (destino) {

        destino.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


const startButton =
    document.getElementById(
        "startButton"
    );


if (startButton) {

    startButton.onclick =
        irAHistoria;

}


/* =========================================
   🎁 ABRIR SORPRESA
========================================= */

/*
   Esta función es GLOBAL.

   El botón HTML utiliza:

   onclick="abrirSorpresa()"

   Por eso no depende de addEventListener.
*/

function abrirSorpresa() {

    const boton =
        document.getElementById(
            "surpriseButton"
        );

    const sorpresa =
        document.getElementById(
            "finalMessage"
        );


    if (!sorpresa) {

        alert(
            "Mi sorpresa se está preparando ❤️"
        );

        return;

    }


    /*
       Mostrar sorpresa
    */

    sorpresa.style.display =
        "block";


    /*
       Ocultar botón
    */

    if (boton) {

        boton.style.display =
            "none";

    }


    /*
       Animación
    */

    sorpresa.classList.remove(
        "surprise-open"
    );


    void sorpresa.offsetWidth;


    sorpresa.classList.add(
        "surprise-open"
    );


    /*
       Corazones
    */

    lluviaDeCorazones();


    /*
       Bajar hasta la sorpresa
    */

    setTimeout(
        function () {

            sorpresa.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        },
        250
    );
}


/* =========================================
   ❤️ CORAZONES
========================================= */

const contenedorCorazones =
    document.getElementById(
        "hearts"
    );


function crearCorazon() {

    if (!contenedorCorazones) {
        return;
    }


    const corazon =
        document.createElement(
            "span"
        );


    corazon.className =
        "floating-heart";


    corazon.innerHTML =
        Math.random() > 0.5
            ? "♥"
            : "♡";


    corazon.style.left =
        Math.random() * 100 + "vw";


    corazon.style.fontSize =
        (
            10 +
            Math.random() * 18
        ) + "px";


    corazon.style.animationDuration =
        (
            5 +
            Math.random() * 5
        ) + "s";


    contenedorCorazones.appendChild(
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
   🌧️ LLUVIA DE CORAZONES
========================================= */

function lluviaDeCorazones() {

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        setTimeout(
            crearCorazon,
            i * 60
        );

    }
}


/* =========================================
   ❤️ CORAZONES SUAVES
========================================= */

setInterval(
    crearCorazon,
    2000
);


/* =========================================
   🚀 INICIO
========================================= */

actualizarContador();

actualizarFrase();


/*
   EXACTAMENTE CADA 1 SEGUNDO.

   Esto hace que el contador funcione
   como un reloj.
*/

setInterval(
    actualizarContador,
    1000
);
```
