window.addEventListener('scroll', function() {

    const scrollPosition = window.scrollY;

    // Obtiene todas las secciones
    const secciones = document.querySelectorAll('.main-section');

    // Itera sobre las secciones para encontrar la sección actual
    secciones.forEach(function(seccion) {
        const seccionId = seccion.getAttribute('id');
        const seccionPosicion = seccion.offsetTop;
        const seccionAltura = seccion.offsetHeight; 

        // Comprueba si la sección está visible en la ventana
        if (scrollPosition >= seccionPosicion && scrollPosition + 32 < seccionPosicion + seccionAltura) {
            // Resalta el enlace de la barra de navegación correspondiente a esta sección
            const enlace = document.querySelector('a[href="#' + seccionId + '"]');
            if (enlace) {
                console.log("activo", seccionId," ", enlace)
                enlace.classList.add('activo');
            }
        } else {
            // Remueve el resaltado de otros enlaces
            const enlace = document.querySelector('a[href="#' + seccionId + '"]');
            if (enlace) {
                enlace.classList.remove('activo');
            }
        }
    });
});
