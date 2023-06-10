// Obtener referencias a los botones
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');


document.addEventListener('DOMContentLoaded', function () {
    // Agregar event listeners a los botones
    loginBtn.addEventListener('click', function () {

        // Validar la longitud de la contraseña en el inicio de sesión
        const password = document.getElementById('password').value;
        if (password.length < 7) {
            alert('La contraseña debe tener al menos 7 caracteres.');
            return;
        }

        // Redirigir a la página admin.html
        window.location.href = 'https://www.google.com';
    });
});

registerBtn.addEventListener('click', function () {
    // Validar la longitud de la contraseña en el registro
    const password = document.getElementById('password').value;
    const passwordC = document.getElementById('confirm-password').value;
    if (password.length < 7) {
        alert('La contraseña debe tener al menos 7 caracteres.');
        return;
    }
    if (password != passwordC) {
        alert('Las contraseñas deben ser iguales');
        return;
    }

    // Redirigir a la página admin.html
    window.location.href = 'index.html';
});
