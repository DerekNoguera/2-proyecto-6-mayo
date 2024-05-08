
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
function caracterSuma(suma) {
    screenTxt.innerHTML += "+"
    SumadorOperadores++;//si se usa una vez el operador + entocnes SumadorOperadores va sumarle 1
}
function caracterResta(resta) {
    screenTxt.innerHTML += "-"
    SumadorOperadores++;
}
function caracterMulti(multi) {
    screenTxt.innerHTML += "*"
    SumadorOperadores++;
}
function caracterDivi(Divi) {
    screenTxt.innerHTML += "/"
    SumadorOperadores++;
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
        let propinaCalculada = (resultado * propina) / 100;  // Hace el calculo de la propina
        propinaTxt.innerHTML = propinaCalculada;    // Muestra la propina calculada en propinaTxt
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
    
    
    screenTxt.innerHTML = " "
})
function numeros2(numerosxd) {
    propinaTxt.innerHTML += numerosxd

}
del.addEventListener("click", function () {
   screenTxt.innerHTML=  screenTxt.innerHTML.substring(0, screenTxt.innerHTML.length - 1)
   //metodo substring dice que va a empezar desde 0, va a contar los caracteres que tiene mi screenTxt.InnerHTML
   // y le va a restar -1 cuando toque el boton del 
})