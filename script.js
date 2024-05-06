let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")
let btn0 = document.getElementById("btn0")
let resultado = document.getElementById("input")
let operadorA = 0
let operadorB = 0
let operacion = 0
btn1.addEventListener("click", function () {
    resultado.textContent += 1
    numero1 = resultado.textContent;
});
btn2.addEventListener("click", function () {
    resultado.textContent += 2
});
btn3.addEventListener("click", function () {
    resultado.textContent += 3
});
btn4.addEventListener("click", function () {
    resultado.textContent += 4
});
btn5.addEventListener("click", function () {
    resultado.textContent += 5
});
btn6.addEventListener("click", function () {
    resultado.textContent += 6
});
btn7.addEventListener("click", function () {
    resultado.textContent += 7
});
btn8.addEventListener("click", function () {
    resultado.textContent += 8
});
btn9.addEventListener("click", function () {
    resultado.textContent += 9
});
btn0.addEventListener("click", function () {
    resultado.textContent += 0
});
let btnIgual = document.getElementById("btnI")
let btnMas = document.getElementById("btnM")
let btnLess = document.getElementById("btnL")
let btnPor = document.getElementById("btnP")
let btnDivision = document.getElementById("btnD")

btnMas.addEventListener("click", function () {
    resultado.textContent += "+"
})
btnLess.addEventListener("click", function () { 
    resultado.textContent += "-"
})
btnPor.addEventListener("click", function () {
    resultado.textContent += "*"
})
btnDivision.addEventListener("click", function () {
    resultado.textContent += "/"
})

btnIgual.addEventListener("click", function () {
    resultado.textContent = eval(resultado.textContent)
})

