
let propina = document.getElementById("propina")
let propinaTxt = document.getElementById("propinatxt")
let screenTxt = document.getElementById("input")
let btnC = document.getElementById("btnC")
let btnp = document.getElementById("propine")
let cancel = document.getElementById("cancel")
let btnIgual = document.getElementById("btnI1")
let btnIgual2 = document.getElementById("btnI2")
let multiPropina = document.getElementById("btnP")
let del = document.getElementById("btnDel")
let SumadorOperadores = 0;//variable donde se van a guardar cuantas vaces se usaron los operadores como "+,-,*,/" 
//let inputEscondido = document.getElementById("inputEscondido")

function numeros(numerosTodos) {// numeros son todos los numeros llamados desde html
    screenTxt.innerHTML += numerosTodos
}
function caracterSuma() {
    let screenText = screenTxt.innerHTML.trim(); // screenText que es una variable que se creo para mentener lo que se muestra
//en pantalla va a ser igual a lo que se muestra en pantalla y el .trim() es para eliminar los campos en blanco de que deja
//un string
    SumadorOperadores++;
    if (screenText.length === 0 || !esOperador(screenText.charAt(screenText.length - 1))) {
    // si el tamaño de lo que se muestra en pantalla y es estrictamente igual a 0, o No esOpera(lo que muestra en pantalla.charAt(screenText.length
  //-1) es decir si el ultimo caracter de lo que se muestra en pantalla es un operador entonces se va a agregar un + en pantalla
  // el No esOperador es una funcion que va a tener como parametros los opeadores "+,*,-,/"
    //para que se repita el mismo prodecimiento el los otros botones
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
        screenTxt.innerHTML += '+';
    }
}
function caracterResta() {
    let screenText = screenTxt.innerHTML.trim();
    SumadorOperadores++;
    if (screenText.length === 0 || !esOperador(screenText.charAt(screenText.length - 1))) {
        screenTxt.innerHTML += '-';
    }else{
        console.log(screenTxt);
    }
    //es la misma documentacion de la función caracterSuma
}
function caracterMulti() {
    let screenText = screenTxt.innerHTML.trim();
    SumadorOperadores++;
    if (screenText.length === 0 || !esOperador(screenText.charAt(screenText.length - 1))) {
        screenTxt.innerHTML += '*';
    }
    //es la misma documentacion de la función caracterSuma
}
function caracterDivi() {
    let screenText = screenTxt.innerHTML.trim();
    SumadorOperadores++;
    if (screenText.length === 0 || !esOperador(screenText.charAt(screenText.length - 1))) {
        screenTxt.innerHTML += '/';
    }
    //es la misma documentacion de la función caracterSuma
}
function esOperador(operadoresMath) {
    return operadoresMath === '+' || operadoresMath === '-' || operadoresMath === '*' || operadoresMath === '/';
    // esta funcion esOperador tiene como valores los operadores, retorna los el parametro con los operadores para comparar
    // sus valores en la función de suma,resta,multiplicacion y division.
}

btnIgual.addEventListener("click", function () {
    let resultado = eval(screenTxt.innerHTML);
    // 

    if (SumadorOperadores > 0) {
        document.getElementById("propine").disabled = false; // Habilita el botón de propina
    } else if (SumadorOperadores <= 0) {
        screenTxt.innerHTML = " ";
    } {

    }
    // Muestra el resultado en screenTxt
    screenTxt.innerHTML = resultado; // screenTxt va a ser igual a resultado y resultado es igual a la suma de los strings con eval()
    // Calcula la propina
    btnIgual2.addEventListener("click", function () {
        let propina = parseFloat(propinaTxt.innerHTML); // Obtiene el valor de la propina que puse
        let propinaCalculada = resultado * propina;  // Hace el calculo de la propina
        propinaTxt.innerHTML = propinaCalculada / 100;    // Muestra la propina calculada en propinaTxt
        console.log(propinaCalculada);
    });
});




btnC.addEventListener("click", function () {
    screenTxt.innerHTML = " "
})
// function porcentaje(porcentajes) {
//     screenTxt.innerHTML = screenTxt.innerHTML * porcentajes;
//     //screenTxt.innerHTML va a ser igual a screenTxt.innerHTML por el % apagar, 
//     //el porcentaje lo elige dentro de la calculadora
// }
// function mostrar() {
//     document.getElementById('propinatxt').style.display = "block"
//     document.getElementById("input").style.display = "none"
// }
btnp.addEventListener("click", function () {
    document.getElementById('propinatxt').style.display = "block"
    document.getElementById("input").style.display = "none"
    document.getElementById("btnI1").style.display = "none"
    document.getElementById("btnI2").style.display = "block"
    document.getElementById("btnL").style.display = "none"
    document.getElementById("btnP").style.display = "none"
    document.getElementById("btnD").style.display = "none"
    document.getElementById("btnC").style.display = "none"
    document.getElementById("btnM").style.display = "none"
    propinaTxt.innerHTML = " "
})

multiPropina.addEventListener("click", function () {
    propinaTxt.innerHTML += "*"
})
btnC.addEventListener("click", function () {
    propinaTxt.innerHTML = " "
})

    cancel.addEventListener("click", function () {
    document.getElementById("propine").disabled = true;// cuando toque el boton de cancel entonces se bloquea el btn de propina
    document.getElementById('propinatxt').style.display = "none"
    document.getElementById("input").style.display = "block"
    document.getElementById("btnI1").style.display = "block"
    document.getElementById("btnI2").style.display = "none"
    document.getElementById("btnL").style.display = "block"
    document.getElementById("btnP").style.display = "block"
    document.getElementById("btnD").style.display = "block"
    document.getElementById("btnC").style.display = "block"
    document.getElementById("btnM").style.display = "block"
    propinaTxt.innerHTML = "Ingrese el % de propina"
    screenTxt.innerHTML = " "
    propinaTxt.innerHTML = " "
    propinaCalculada = " "
    location.reload()
})
function numeros2(numerosxd) {
    propinaTxt.innerHTML += numerosxd

}
del.addEventListener("click", function () {
    screenTxt.innerHTML = screenTxt.innerHTML.substring(0, screenTxt.innerHTML.length - 1)
    //metodo substring dice que va a empezar desde 0, va a contar los caracteres que tiene mi screenTxt.InnerHTML
    // y le va a restar -1 cuando toque el boton del 
    })