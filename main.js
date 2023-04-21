const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})


const new_username = document.getElementById('new_username')
const new_email = document.getElementById('new_email')
const new_password = document.getElementById('new_password')
const repeat_password = document.getElementById('repeat_password')
const new_botton = document.getElementById('button_registro')

new_botton.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        new_username: new_username.value,
        new_email: new_email.value,
        new_password: new_password.value,
        repeat_password: repeat_password.value,

    }

    console.log(data)
})


//ocular-mostrar formulario login-registro

const buttonARegistro = document.getElementById('buttonARegistro');
const div_login = document.getElementById('div_login');
const div_registrarse = document.getElementById('div_registrarse');

buttonARegistro.addEventListener('click', () => {
  div_login.style.display = 'none';
  div_registrarse.style.display = 'block';
});

//ocular-mostrar formulario registro-login

const buttonALogin = document.getElementById('buttonALogin');

buttonALogin.addEventListener('click', () => {
  div_login.style.display = 'block';
  div_registrarse.style.display = 'none';
});