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


/**************************************************************
* Cuando todos los elementos del formulario estén cargados, se llamará a la función iniciar
***************************************************************/
window.onload = iniciar;


/**************************************************************
*   Esperamos los eventos de click para el botón y de pérdida de foco para nombre y apellidos.
***************************************************************/
function iniciar() {
    
    // Al hacer click en el botón de enviar tendrá que llamar a la la función validar que se encargará
    // de validar el formulario.
    // Cuando se pierda el foco de nombre o apellidos se llamará a la función convertirMayusculas.
    // El evento de click y el de perder el foco lo programamos en la fase de burbujeo (false).
    document.getElementById("enviar").addEventListener('click', validar, false);
    document.getElementById("nombre").addEventListener('blur', convertirMayusculas, false);
}


/**************************************************************
* Mostramos su valor en el contenedor indicado, y validamos los datos introducidos.
* Sin todos son correctos se envía el formulario, y en caso contrario se anula su efecto
* de envío
**************************************************************/
function validar(eventopordefecto) {
    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    if (validarcampostexto(this) && validarEmail() && validarTelefono() && validarContraseña() && confirm("¿Deseas enviar el formulario?")) {
        return true;
    }else {
        // Cancelamos el evento de envío por defecto asignado al boton de submit enviar.
        eventopordefecto.preventDefault();
        return false;   // Salimos de la función devolviendo false.
    }
}


/**************************************************************
* Validamos que todos los campos de texto tengan algun valor introducido
***************************************************************/
function validarcampostexto() {
    var valorNombre = document.getElementById("nombre").value;




    //Validar nombre
    if (valorNombre == null || valorNombre.length == 0 || /^\s+$/.test(valorNombre)) {
        alert("El nombre no puede estar vacío.");
        return false;
    }

    return true;
}


/**************************************************************
* Función llamada cada vez que se pierda el foco en nombre o apellidos, y que convierte
* el valor introducido a mayúsculas
***************************************************************/
function convertirMayusculas(event) {
    var campo = event.target;
    campo.value = campo.value.toUpperCase();
}


function validarTelefono() {
    var valorTelefono = document.getElementById("telefono").value;


    if (!(/^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/).test(valorTelefono)) {
        alert("El  teléfono no cumple los requisitos.")
        return false;
    }


    return true;
}


function validarContraseña() {
    var valorContraseña = document.getElementById("contraseña").value;


    if (!(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,18}$/).test(valorContraseña)) {
        alert("La contraseña no es correcta.")
        return false;
    }
    return true;
}

/**************************************************************
* Comprobamos el email (caracteres)@(caracteres).(de 2 a 4 caracteres)
***************************************************************/
function validarEmail() {
    var valorEmail = document.getElementById("email").value;

    if (!(/^(\w[\.\-]?){2,}@(\w[\-]?){2,}.(\w[\-]?){2,4}/.test(valorEmail))) {
        alert("El correo electrónico no tiene formato correcto.");
        return false;
    }


    return true;
}