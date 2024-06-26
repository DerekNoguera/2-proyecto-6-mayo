let login1 = document.getElementById("login1")
login1.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(login1);
    let emailLogin = document.getElementById("user")
    let passwordLogin = document.getElementById("password")

    let datos = JSON.parse(localStorage.getItem('datos')) || [] //OBTIENE los elementos de localStorage y su contraseña es 'users'
    let validarCampos = datos.find(user => user.email === emailLogin.value && user.password === passwordLogin.value)//en la key users va a encontrar
    // o va a validar que emaillogin sea estrictamente igual a el email y passwordLogin sea estricatamente igual a la contraseña que tiene guardada la key'users'

    if (!validarCampos) {// si validarCampos no es verdadero, osea es falso so va a enviar una alerta diciendo que el correo o contraseña es incorrecta
        alert("Correo y/o contraseña incorrecta")
    } else {
        window.location.href = "index.html" //si validarCampos es verdadero entonces se va a enviar a la otra pagina
    }
})
let link1 = document.getElementById("link-register")
link1.addEventListener("click", function () {
    document.getElementById("ocultar2").style.display = 'block';
    document.getElementById("ocultar1").style.display = "none"
})

// R E G I S T E R

let registros = document.getElementById("ingresar")
registros.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(registros);
    let email = document.getElementById("correo").value
    let userRegister = document.getElementById("user-register").value
    let passwordRegister = document.getElementById("password-register").value

    let datos = JSON.parse(localStorage.getItem('datos')) || [] // Users va a contener mis usuarios, contraseñas e email, JSON.parse(localStorage.getItem('users') dice //que obtenga los elementos de localStorage('user') y se especifica y los [] si el local tiene contenido lo va a guardar en users y si no, va a ser un array vacio
    let usuariosRegistrados = datos.find(user => user.email == email)//usuariosRegistrados va a ser igual a user.find es encontrar usuario y va a buscar si user => //user.email es igual a email
    // solamente el registro va a funcionar si el email no es estrictamente igual email, si no es el mismo email entonces se puede registrar
    if (usuariosRegistrados) {
                // document.getElementById("ocultar2").style.display = 'none';
                // document.getElementById("ocultar1").style.display = "block"
        return alert("El usuario ya esta registrado") //si usuarios registrado es verdadero entonces quiero que me retorne una alerta 
    }
    datos.push({ user: userRegister, email: email, password: passwordRegister })//si el usuarioRegistrado es falso entonces a mi array "users" se le agrega  //user: userRegister, email: email, password: passwordRegister
    localStorage.setItem('datos', JSON.stringify(datos))//LocalStorage.setitem va a guardar ('users') el archivo //JSON.stringify convierte un objeto o valor de JavaScript en una cadena de texto JSON
    console.log(email, userRegister, passwordRegister);
    alert("Registrado Exitosamente")
    document.getElementById("ocultar2").style.display = 'none';
    document.getElementById("ocultar1").style.display = "block"
})
let singUp = document.getElementById("link-singup")
singUp.addEventListener("click", function () {
    document.getElementById("ocultar2").style.display = 'none';
    document.getElementById("ocultar1").style.display = "block"
})