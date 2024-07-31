document.addEventListener("DOMContentLoaded", function() {
    const btnLeft = document.querySelector(".btn-left");
    const btnRight = document.querySelector(".btn-right");
    const slider = document.querySelector("#slider");
    const sliderSection = document.querySelectorAll(".slider-section");
    const sliderIndexes = document.querySelector("#slider-indexes");

    let indiceActual = 0;

    function moverHaciaDerecha() {
        indiceActual++;
        if (indiceActual >= sliderSection.length) {
            indiceActual = 0;
        }
        actualizarIndices(indiceActual);
        moverSlider();
    }

    function moverSlider() {
        let operacion = indiceActual * (100 / sliderSection.length);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }

    function actualizarIndices(indice) {
        const itemsIndices = sliderIndexes.querySelectorAll(".index-item");
        itemsIndices.forEach((item, index) => {
            if (index === indice) {
                item.classList.add("activo");
            } else {
                item.classList.remove("activo");
            }
        });
    }

    for (let i = 0; i < sliderSection.length; i++) {
        const indexItem = document.createElement("li");
        indexItem.classList.add("index-item");
        indexItem.addEventListener("click", () => {
            indiceActual = i;
            actualizarIndices(indiceActual);
            moverSlider();
        });
        sliderIndexes.appendChild(indexItem);
    }

    actualizarIndices(indiceActual);

    setInterval(moverHaciaDerecha, 6000);

    btnLeft.addEventListener("click", () => {
        indiceActual--;
        if (indiceActual < 0) {
            indiceActual = sliderSection.length - 1;
        }
        actualizarIndices(indiceActual);
        moverSlider();
    });

    btnRight.addEventListener("click", () => {
        moverHaciaDerecha();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".btn-menu");
    const otherButtons = document.querySelectorAll(".animated-button");
    const menuContainer = document.querySelector(".menu-options");
    let buttonsCreated = false;

    // Función para verificar la media query y mostrar/ocultar los botones
    function checkMediaQuery() {
        const isMobile = window.matchMedia("(max-width: 600px)").matches;
        otherButtons.forEach(button => {
            button.style.display = isMobile ? "none" : "block";
        });
        menuButton.style.display = isMobile ? "block" : "none";
    }

    checkMediaQuery();

    window.addEventListener("resize", checkMediaQuery);

    // Función para mostrar u ocultar el menú al hacer clic en el botón del menú
    menuButton.addEventListener("click", function() {
        if (!buttonsCreated) {
            createMenuButtons();
            buttonsCreated = true;
        }
        // Alternar la visibilidad del menú
        menuContainer.classList.toggle("show");
        menuContainer.style.display = menuContainer.classList.contains("show") ? "flex" : "none";
    });

    // Función para crear los botones del menú
    function createMenuButtons() {
        const button1 = createMenuButton("VER PRODUCTOS", "../HTML/productos.html");
        const button2 = createMenuButton("INICIAR SESIÓN", "../HTML/log-in.html");
        menuContainer.appendChild(button1);
        menuContainer.appendChild(button2);
    }

    function createMenuButton(text, href) {
        const button = document.createElement("button");
        button.textContent = text;
        button.classList.add("menu-button");
        button.addEventListener("click", function() {
            window.location.href = href;
        });
        return button;
    }
});



