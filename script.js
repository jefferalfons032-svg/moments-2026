```javascript
// ==========================================
// FECHA DE INICIO
// ==========================================

const fechaInicio = new Date(
    2023,
    8,
    1,
    0,
    0,
    0
);


// ==========================================
// BOTÓN INICIO
// ==========================================

const startButton =
    document.getElementById("startButton");

startButton.addEventListener("click", function () {

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

});


// ==========================================
// CONTADOR
// ==========================================

function actualizarContador() {

    const ahora = new Date();

    const diferencia =
        Math.max(
            0,
            ahora - fechaInicio
        );

    const totalSegundos =
        Math.floor(
            diferencia / 1000
        );


    const dias =
        Math.floor(
            totalSegundos / 86400
        );

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


    document.getElementById("days")
        .textContent = dias;

    document.getElementById("hours")
        .textContent = horas;

    document.getElementById("minutes")
        .textContent = minutos;

    document.getElementById("seconds")
        .textContent = segundos;

}


actualizarContador();

setInterval(
    actualizarContador,
    1000
);


// ==========================================
// SORPRESA
// ==========================================

const surpriseButton =
    document.getElementById("surpriseButton");

const finalMessage =
    document.getElementById("finalMessage");


surpriseButton.addEventListener(
    "click",
    function () {

        finalMessage.classList.remove("hidden");

        surpriseButton.style.display =
            "none";

        setTimeout(function () {

            finalMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 200);

    }
);


// ==========================================
// CORAZONES
// ==========================================

const heartsContainer =
    document.getElementById("hearts");


function crearCorazon() {

    const heart =
        document.createElement("span");

    heart.className =
        "floating-heart";

    heart.innerHTML = "♥";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    heart.style.fontSize =
        (10 + Math.random() * 18) + "px";

    heart.style.opacity =
        0.2 + Math.random() * 0.5;


    heartsContainer.appendChild(
        heart
    );


    setTimeout(function () {

        heart.remove();

    }, 11000);

}


setInterval(
    crearCorazon,
    700
);


// ==========================================
// ANIMACIÓN AL HACER SCROLL
// ==========================================

const elementos =
    document.querySelectorAll(
        ".section"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


elementos.forEach(function(elemento) {

    observer.observe(elemento);

});
```
