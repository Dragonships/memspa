document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContacto');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const datos = {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value,
                mensaje: document.getElementById('mensaje').value,
            };

            console.log("--- Datos Recibidos del Formulario ---");
            console.table(datos);

            alert("¡Formulario enviado correctamente!");
            form.reset();
        });
    }
});