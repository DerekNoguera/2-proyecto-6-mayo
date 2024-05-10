let userLogin = document.getElementById("user")
let passwordLogin = document.getElementById("password")

// R E G I S T E R

let registros = document.getElementById("ingresar")
registros.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(registros);
    let email = document.getElementById("correo").value
    let userRegister = document.getElementById("user-register").value
    let passwordRegister = document.getElementById("password-register").value

    let users = JSON.parse(localStorage.getItem('users')) || [] // Users va a contener mis usuarios, contraseñas e email, JSON.parse(localStorage.getItem('users') dice //que obtenga los elementos de localStorage('user') y se especifica y los [] si el local tiene contenido lo va a guardar en users y si no, va a ser un array vacio
    let usuariosRegistrados = users.find(user => user.email === email)//usuariosRegistrados va a ser igual a user.find es encontrar usuario y va a buscar si user => //user.email es igual a email
   // solamente el registro va a funcionar si el email no es estrictamente igual email, si no es el mismo email entonces se puede registrar
    if (usuariosRegistrados) {
        return alert("El usuario ya esta registrado") //si usuarios registrado es verdadero entonces quiero que me retorne una alerta
    }

    users.push({ user: userRegister, email: email, password: passwordRegister })//si el usuarioRegistrado es falso entonces a mi array "users" se le agrega  //user: userRegister, email: email, password: passwordRegister
    localStorage.setItem('users', JSON.stringify(users))//LocalStorage.setitem va a guardar ('users') el archivo //JSON.stringify convierte un objeto o valor de JavaScript en una cadena de texto JSON
    console.log(email, userRegister, passwordRegister);
    alert("Registrado exitoso")
})