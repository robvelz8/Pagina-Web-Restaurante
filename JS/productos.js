document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.querySelector(".sections:first-child .animated-button");
    var mainMenu = null;
    var currentSubMenu = null;

    var categories = [
        { name: "Entrantes", products: [{ name: "Croquetas metálicas", href: "#card1" }, { name: "Empanadas Holográficas", href: "#card2" }] },
        { name: "Principales", products: [{ name: "Apocalipcheese", href: "#card3" }, { name: "Acero al whisky", href: "#card4" }, { name: "Pulpo a la atlántida", href: "#card5" }, { name: "Filete espacial", href: "#card6" }] },
        { name: "Postres", products: [{ name: "Tarta de queso cósmico", href: "#card7" }, { name: "Soufflé de nebulosa", href: "#card8" }] },
        { name: "Bebidas", products: [{ name: "Agua estelar", href: "#card9" }, { name: "Cóctel galáctico", href: "#card10" }] }
    ];

    function addSmoothScrollingToLinks(links) {
        links.forEach(function(link) {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                var targetId = this.getAttribute("href").substring(1);
                var targetElement = document.getElementById(targetId);
                if (targetElement) {
                    var offsetTop = targetElement.offsetTop;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
            });
        });
    }

    menuButton.addEventListener("click", function(event) {
        event.stopPropagation();

        if (mainMenu && mainMenu.style.display === "block") {
            mainMenu.style.display = "none";
            return;
        }

        if (!mainMenu) {
            mainMenu = document.createElement("div");
            mainMenu.className = "main-menu";

            categories.forEach(function(category) {
                var categoryLink = document.createElement("div");
                categoryLink.textContent = category.name;
                categoryLink.className = "category-link";

                var dropdownMenu = document.createElement("div");
                dropdownMenu.className = "dropdown-menu";

                category.products.forEach(function(product) {
                    var productLink = document.createElement("a");
                    productLink.textContent = product.name;
                    productLink.href = product.href;
                    dropdownMenu.appendChild(productLink);
                });

                categoryLink.addEventListener("click", function(event) {
                    event.stopPropagation();
                    if (currentSubMenu && currentSubMenu !== dropdownMenu) {
                        currentSubMenu.style.display = "none";
                    }
                    dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
                    currentSubMenu = dropdownMenu.style.display === "block" ? dropdownMenu : null;

                    addSmoothScrollingToLinks(dropdownMenu.querySelectorAll("a"));
                });

                categoryLink.appendChild(dropdownMenu);
                mainMenu.appendChild(categoryLink);
            });

            document.body.appendChild(mainMenu);
        }

        mainMenu.style.display = "block";
        var buttonRect = menuButton.getBoundingClientRect();
        mainMenu.style.position = "absolute";
        mainMenu.style.top = buttonRect.bottom + "px";
        mainMenu.style.left = buttonRect.left + "px";
    });

    document.addEventListener("click", function(event) {
        if (mainMenu && !mainMenu.contains(event.target) && !menuButton.contains(event.target)) {
            mainMenu.style.display = "none";
            if (currentSubMenu) {
                currentSubMenu.style.display = "none";
            }
        }
    });
});


// Función para crear y mostrar el pop-up 1
function crearPopUp1() {
    // Eliminar cualquier pop-up existente
    var existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Crear el elemento de pop-up
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup1"; // Agregar un id al pop-up

    // Crear el botón de cierre del pop-up
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "𒉽";
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        // Resetear las estrellas cuando se cierra el pop-up
        var stars = document.querySelectorAll('.rating input');
        stars.forEach(function(star) {
            star.checked = false;
        });
    });

    // Crear la imagen del producto
    var img = document.createElement("img");
    img.src = "../ASSETS/IMGs/croquetas.jfif";

    // Crear la sección de valoración de estrellas
    var rating = document.createElement("div");
    rating.className = "rating";
    rating.innerHTML = `
        <input type="radio" id="star-1" name="star-radio" value="star-1">
        <label for="star-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-2" name="star-radio" value="star-2">
        <label for="star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-3" name="star-radio" value="star-3">
        <label for="star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-4" name="star-radio" value="star-4">
        <label for="star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-5" name="star-radio" value="star-5">
        <label for="star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
    `;

    // Crear la sección de descripción del producto
    var popupDesc = document.createElement("div");
    popupDesc.className = "popup-desc";
    popupDesc.innerHTML = `
        <h2>Croquetas metálicas</h2>
        <p>Déjate sorprender por nuestras croquetas metálicas, una creación única que combina ingredientes tradicionales con un toque futurista. Hechas con 50g de vaca rubia gallega de primera calidad y fritas en un aceite especial.</p>
    `;

    // Agregar elementos al pop-up
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    popup.appendChild(rating);
    popup.appendChild(popupDesc);

    // Mostrar el pop-up
    document.body.appendChild(popup);
}

// Función para crear y mostrar el pop-up 2
function crearPopUp2() {
    // Eliminar cualquier pop-up existente
    var existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Crear el elemento de pop-up
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup1"; // Agregar un id al pop-up

    // Crear el botón de cierre del pop-up
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "𒉽";
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        // Resetear las estrellas cuando se cierra el pop-up
        var stars = document.querySelectorAll('.rating input');
        stars.forEach(function(star) {
            star.checked = false;
        });
    });

    // Crear la imagen del producto
    var img = document.createElement("img");
    img.src = "../ASSETS/IMGs/empanadas.jfif";

    // Crear la sección de valoración de estrellas
    var rating = document.createElement("div");
    rating.className = "rating";
    rating.innerHTML = `
        <input type="radio" id="star-1" name="star-radio" value="star-1">
        <label for="star-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-2" name="star-radio" value="star-2">
        <label for="star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-3" name="star-radio" value="star-3">
        <label for="star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-4" name="star-radio" value="star-4">
        <label for="star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-5" name="star-radio" value="star-5">
        <label for="star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
    `;

    // Crear la sección de descripción del producto
    var popupDesc = document.createElement("div");
    popupDesc.className = "popup-desc";
    popupDesc.innerHTML = `
        <h2>Empanadas Holográficas</h2>
        <p>Experimenta la combinación perfecta de tradición y tecnología con nuestras empanadas holográficas, creadas por un servidor que garantiza una experiencia culinaria visual y deliciosa sin igual.</p>
    `;

    // Agregar elementos al pop-up
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    popup.appendChild(rating);
    popup.appendChild(popupDesc);

    // Mostrar el pop-up
    document.body.appendChild(popup);

}

// Función para crear y mostrar el pop-up 3
function crearPopUp3() {
    // Eliminar cualquier pop-up existente
    var existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Crear el elemento de pop-up
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup1"; // Agregar un id al pop-up

    // Crear el botón de cierre del pop-up
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "𒉽";
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        // Resetear las estrellas cuando se cierra el pop-up
        var stars = document.querySelectorAll('.rating input');
        stars.forEach(function(star) {
            star.checked = false;
        });
    });

    // Crear la imagen del producto
    var img = document.createElement("img");
    img.src = "../ASSETS/IMGs/apocalipcheese.jfif";

    // Crear la sección de valoración de estrellas
    var rating = document.createElement("div");
    rating.className = "rating";
    rating.innerHTML = `
        <input type="radio" id="star-1" name="star-radio" value="star-1">
        <label for="star-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-2" name="star-radio" value="star-2">
        <label for="star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-3" name="star-radio" value="star-3">
        <label for="star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-4" name="star-radio" value="star-4">
        <label for="star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-5" name="star-radio" value="star-5">
        <label for="star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
    `;

    // Crear la sección de descripción del producto
    var popupDesc = document.createElement("div");
    popupDesc.className = "popup-desc";
    popupDesc.innerHTML = `
        <h2>Apocalipcheese</h2>
        <p>Sumérgete en una aventura gastronómica apocalíptica con nuestros ingredientes únicos: 100g de jinete del apocalipsis, guindillas de Mordor y pan de Namek. Un plato que desafía el fin del mundo.</p>
    `;

    // Agregar elementos al pop-up
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    popup.appendChild(rating);
    popup.appendChild(popupDesc);

    // Mostrar el pop-up
    document.body.appendChild(popup);

}

// Función para crear y mostrar el pop-up 4
function crearPopUp4() {
    // Eliminar cualquier pop-up existente
    var existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Crear el elemento de pop-up
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup1"; // Agregar un id al pop-up

    // Crear el botón de cierre del pop-up
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "𒉽";
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        // Resetear las estrellas cuando se cierra el pop-up
        var stars = document.querySelectorAll('.rating input');
        stars.forEach(function(star) {
            star.checked = false;
        });
    });

    // Crear la imagen del producto
    var img = document.createElement("img");
    img.src = "../ASSETS/IMGs/solomillo-whisky.jfif";

    // Crear la sección de valoración de estrellas
    var rating = document.createElement("div");
    rating.className = "rating";
    rating.innerHTML = `
        <input type="radio" id="star-1" name="star-radio" value="star-1">
        <label for="star-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-2" name="star-radio" value="star-2">
        <label for="star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-3" name="star-radio" value="star-3">
        <label for="star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-4" name="star-radio" value="star-4">
        <label for="star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-5" name="star-radio" value="star-5">
        <label for="star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
    `;

    // Crear la sección de descripción del producto
    var popupDesc = document.createElement("div");
    popupDesc.className = "popup-desc";
    popupDesc.innerHTML = `
    <h2>Acero al Whisky</h2>
    <p>Descubre una mezcla épica de sabores con 200g de solomillo al whisky, acentuado con notas de acero vikingo. Ideal para aquellos con un paladar intrépido y aventurero.</p>
    `;

    // Agregar elementos al pop-up
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    popup.appendChild(rating);
    popup.appendChild(popupDesc);

    // Mostrar el pop-up
    document.body.appendChild(popup);
}

// Función para crear y mostrar el pop-up 5
function crearPopUp5() {
    // Eliminar cualquier pop-up existente
    var existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Crear el elemento de pop-up
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup1"; // Agregar un id al pop-up

    // Crear el botón de cierre del pop-up
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "𒉽";
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        // Resetear las estrellas cuando se cierra el pop-up
        var stars = document.querySelectorAll('.rating input');
        stars.forEach(function(star) {
            star.checked = false;
        });
    });

    // Crear la imagen del producto
    var img = document.createElement("img");
    img.src = "../ASSETS/IMGs/pulpo a la atlántida.jfif";

    // Crear la sección de valoración de estrellas
    var rating = document.createElement("div");
    rating.className = "rating";
    rating.innerHTML = `
        <input type="radio" id="star-1" name="star-radio" value="star-1">
        <label for="star-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-2" name="star-radio" value="star-2">
        <label for="star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-3" name="star-radio" value="star-3">
        <label for="star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-4" name="star-radio" value="star-4">
        <label for="star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-5" name="star-radio" value="star-5">
        <label for="star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
    `;

    // Crear la sección de descripción del producto
    var popupDesc = document.createElement("div");
    popupDesc.className = "popup-desc";
    popupDesc.innerHTML = `
    <h2>Pulpo a la Atlántida</h2>
    <p>Degusta los misterios del océano con nuestro pulpo completo traído desde la legendaria Atlántida. Una delicia marina que te transportará a tiempos míticos.</p>    
    `;

    // Agregar elementos al pop-up
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    popup.appendChild(rating);
    popup.appendChild(popupDesc);

    // Mostrar el pop-up
    document.body.appendChild(popup);

}

// Función para crear y mostrar el pop-up 6
function crearPopUp6() {
    // Eliminar cualquier pop-up existente
    var existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Crear el elemento de pop-up
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup1"; // Agregar un id al pop-up

    // Crear el botón de cierre del pop-up
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "𒉽";
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        // Resetear las estrellas cuando se cierra el pop-up
        var stars = document.querySelectorAll('.rating input');
        stars.forEach(function(star) {
            star.checked = false;
        });
    });

    // Crear la imagen del producto
    var img = document.createElement("img");
    img.src = "../ASSETS/IMGs/filete-espacial.jfif";

    // Crear la sección de valoración de estrellas
    var rating = document.createElement("div");
    rating.className = "rating";
    rating.innerHTML = `
        <input type="radio" id="star-1" name="star-radio" value="star-1">
        <label for="star-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-2" name="star-radio" value="star-2">
        <label for="star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-3" name="star-radio" value="star-3">
        <label for="star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-4" name="star-radio" value="star-4">
        <label for="star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-5" name="star-radio" value="star-5">
        <label for="star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
    `;

    // Crear la sección de descripción del producto
    var popupDesc = document.createElement("div");
    popupDesc.className = "popup-desc";
    popupDesc.innerHTML = `
    <h2>Filete de Pollo Espacial</h2>
    <p>Embárcate en una travesía culinaria intergaláctica con nuestro filete de pollo espacial, marinado en salsa de nebulosa y acompañado de crujientes patatas asteroidales. Un manjar de otro mundo.</p>
    
    `;

    // Agregar elementos al pop-up
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    popup.appendChild(rating);
    popup.appendChild(popupDesc);

    // Mostrar el pop-up
    document.body.appendChild(popup);

}

// Función para crear y mostrar el pop-up 7
function crearPopUp7() {
    // Eliminar cualquier pop-up existente
    var existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Crear el elemento de pop-up
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup1"; // Agregar un id al pop-up

    // Crear el botón de cierre del pop-up
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "𒉽";
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        // Resetear las estrellas cuando se cierra el pop-up
        var stars = document.querySelectorAll('.rating input');
        stars.forEach(function(star) {
            star.checked = false;
        });
    });

    // Crear la imagen del producto
    var img = document.createElement("img");
    img.src = "../ASSETS/IMGs/tarta-queso-cosmico.jfif";

    // Crear la sección de valoración de estrellas
    var rating = document.createElement("div");
    rating.className = "rating";
    rating.innerHTML = `
        <input type="radio" id="star-1" name="star-radio" value="star-1">
        <label for="star-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-2" name="star-radio" value="star-2">
        <label for="star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-3" name="star-radio" value="star-3">
        <label for="star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-4" name="star-radio" value="star-4">
        <label for="star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-5" name="star-radio" value="star-5">
        <label for="star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
    `;

    // Crear la sección de descripción del producto
    var popupDesc = document.createElement("div");
    popupDesc.className = "popup-desc";
    popupDesc.innerHTML = `
    <h2>Tarta de Queso Cósmico</h2>
    <p>Disfruta de una experiencia celestial con nuestra tarta de queso, hecha con 100g de queso cheddar y polvo estelar. Un postre que iluminará tus sentidos.</p>    
    `;

    // Agregar elementos al pop-up
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    popup.appendChild(rating);
    popup.appendChild(popupDesc);

    // Mostrar el pop-up
    document.body.appendChild(popup);
}

// Función para crear y mostrar el pop-up 8
function crearPopUp8() {
    // Eliminar cualquier pop-up existente
    var existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Crear el elemento de pop-up
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup1"; // Agregar un id al pop-up

    // Crear el botón de cierre del pop-up
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "𒉽";
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        // Resetear las estrellas cuando se cierra el pop-up
        var stars = document.querySelectorAll('.rating input');
        stars.forEach(function(star) {
            star.checked = false;
        });
    });

    // Crear la imagen del producto
    var img = document.createElement("img");
    img.src = "../ASSETS/IMGs/soufflé-nebulosa.jfif";

    // Crear la sección de valoración de estrellas
    var rating = document.createElement("div");
    rating.className = "rating";
    rating.innerHTML = `
        <input type="radio" id="star-1" name="star-radio" value="star-1">
        <label for="star-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-2" name="star-radio" value="star-2">
        <label for="star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-3" name="star-radio" value="star-3">
        <label for="star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-4" name="star-radio" value="star-4">
        <label for="star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-5" name="star-radio" value="star-5">
        <label for="star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
    `;

    // Crear la sección de descripción del producto
    var popupDesc = document.createElement("div");
    popupDesc.className = "popup-desc";
    popupDesc.innerHTML = `
    <h2>Soufflé de Nebulosa</h2>
    <p>Saborea la magia del cosmos con nuestro soufflé de nebulosa, elaborado con 100mg de polvo de estrellas comestible, esencia de agujero negro y cristales de energía cuántica. Un postre fuera de este mundo.</p>    
    `;

    // Agregar elementos al pop-up
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    popup.appendChild(rating);
    popup.appendChild(popupDesc);

    // Mostrar el pop-up
    document.body.appendChild(popup);
}

// Función para crear y mostrar el pop-up 9
function crearPopUp9() {
    // Eliminar cualquier pop-up existente
    var existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Crear el elemento de pop-up
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup1"; // Agregar un id al pop-up

    // Crear el botón de cierre del pop-up
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "𒉽";
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        // Resetear las estrellas cuando se cierra el pop-up
        var stars = document.querySelectorAll('.rating input');
        stars.forEach(function(star) {
            star.checked = false;
        });
    });

    // Crear la imagen del producto
    var img = document.createElement("img");
    img.src = "../ASSETS/IMGs/agua-estelar.jfif";

    // Crear la sección de valoración de estrellas
    var rating = document.createElement("div");
    rating.className = "rating";
    rating.innerHTML = `
        <input type="radio" id="star-1" name="star-radio" value="star-1">
        <label for="star-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-2" name="star-radio" value="star-2">
        <label for="star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-3" name="star-radio" value="star-3">
        <label for="star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-4" name="star-radio" value="star-4">
        <label for="star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-5" name="star-radio" value="star-5">
        <label for="star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
    `;

    // Crear la sección de descripción del producto
    var popupDesc = document.createElement("div");
    popupDesc.className = "popup-desc";
    popupDesc.innerHTML = `
    <h2>Agua Estelar</h2>
    <p>Refresca tu ser con nuestra agua estelar, una mezcla de hidrógeno cósmico, oxígeno cuántico, polvo de cometa y cristales de tiempo. Una bebida revitalizante de otro universo.</p>    
    `;

    // Agregar elementos al pop-up
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    popup.appendChild(rating);
    popup.appendChild(popupDesc);

    // Mostrar el pop-up
    document.body.appendChild(popup);
}

// Función para crear y mostrar el pop-up 10
function crearPopUp10() {
    // Eliminar cualquier pop-up existente
    var existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Crear el elemento de pop-up
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup1"; // Agregar un id al pop-up

    // Crear el botón de cierre del pop-up
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "𒉽";
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        
        // Resetear las estrellas cuando se cierra el pop-up
        var stars = document.querySelectorAll('.rating input');
        stars.forEach(function(star) {
            star.checked = false;
        });
    });

    // Crear la imagen del producto
    var img = document.createElement("img");
    img.src = "../ASSETS/IMGs/coctel-galactico.jfif";

    // Crear la sección de valoración de estrellas
    var rating = document.createElement("div");
    rating.className = "rating";
    rating.innerHTML = `
        <input type="radio" id="star-1" name="star-radio" value="star-1">
        <label for="star-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-2" name="star-radio" value="star-2">
        <label for="star-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-3" name="star-radio" value="star-3">
        <label for="star-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-4" name="star-radio" value="star-4">
        <label for="star-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
        <input type="radio" id="star-5" name="star-radio" value="star-5">
        <label for="star-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg></label>
    `;

    // Crear la sección de descripción del producto
    var popupDesc = document.createElement("div");
    popupDesc.className = "popup-desc";
    popupDesc.innerHTML = `
    <h2>Cóctel Galáctico</h2>
    <p>Brinda con nuestro cóctel galáctico, una mezcla única de elixir de Quásar, esencia de agujero de gusano e hielo de cometa criogénico. Una bebida que desafía las fronteras del sabor.</p>    
    `;

    // Agregar elementos al pop-up
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    popup.appendChild(rating);
    popup.appendChild(popupDesc);

    // Mostrar el pop-up
    document.body.appendChild(popup);
}