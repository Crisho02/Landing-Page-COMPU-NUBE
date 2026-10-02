document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('btn-saludo');

    // Saludamos al usuario al hacer clic en el boton
    if (boton) {
        boton.addEventListener('click', function() {
            const nombre = prompt('Ingrese su nombre:');
            if (nombre) {
                alert(`¡Hola, ${nombre}! Bienvenido a tu web de Bitacora. Organizemos tus ideas y proyectos.`);
            } else {
                alert('Bienvenido a tu web de Bitacora. Organizemos tus ideas y proyectos.');
            }
        })
    }

    // Cambiamos el color del header al hacer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = '#52ab98';
        } else {
            header.style.backgroundColor = '#2b6777';
        }
    })

})