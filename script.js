// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
// let btn3 = document.getElementById("btn3")
// let btn4 = document.getElementById("btn4")
// let btn5 = document.getElementById("btn5")
// let btn6 = document.getElementById("btn6")
// let btn7 = document.getElementById("btn7")
// let btn8 = document.getElementById("btn8")
// let btn9 = document.getElementById("btn9")
// let btn0 = document.getElementById("btn0")

// btn1.addEventListener("click", function () {
//     screenTxt.textContent += 1
//     numero1 = screenTxt.textContent;
// });
// btn2.addEventListener("click", function () {
//     screenTxt.textContent += 2
// });
// btn3.addEventListener("click", function () {
//     screenTxt.textContent += 3
// });
// btn4.addEventListener("click", function () {
//     screenTxt.textContent += 4
// });
// btn5.addEventListener("click", function () {
//     screenTxt.textContent += 5
// });
// btn6.addEventListener("click", function () {
//     screenTxt.textContent += 6
// });
// btn7.addEventListener("click", function () {
//     screenTxt.textContent += 7
// });
// btn8.addEventListener("click", function () {
//     screenTxt.textContent += 8
// });
// btn9.addEventListener("click", function () {
//     screenTxt.textContent += 9
// });
// btn0.addEventListener("click", function () {
//     screenTxt.textContent += 0
// });
// let btnMas = document.getElementById("btnM")
// let btnLess = document.getElementById("btnL")
// let btnPor = document.getElementById("btnP")
// let btnDivision = document.getElementById("btnD")
// let btnDel = document.getElementById("btnDel")
// let propina = document.getElementById("propina")

// btnMas.addEventListener("click", function () {
//     screenTxt.textContent += "+"
// })
// btnLess.addEventListener("click", function () {
//     screenTxt.textContent += "-"
// })
// btnPor.addEventListener("click", function () {
//     screenTxt.textContent += "*"
// })
// btnDivision.addEventListener("click", function () {
//     screenTxt.textContent += "/"
// })
let screenTxt = document.getElementById("input")
let btnC = document.getElementById("btnC")
function numeros(numerosTodos) {// numeros son todos los numeros llamados desde html
    screenTxt.innerHTML += numerosTodos
}
function caracterSuma(suma) {
    screenTxt.innerHTML += "+"
}
function caracterResta(resta) {
    screenTxt.innerHTML += "-"
}
function caracterMulti(multi) {
    screenTxt.innerHTML += "*"
}
function caracterDivi(Divi) {
    screenTxt.innerHTML += "/"
}
let btnIgual = document.getElementById("btnI")
btnIgual.addEventListener("click", function () {
    screenTxt.innerHTML = eval(screenTxt.innerHTML)
})
btnC.addEventListener("click", function () {
    screenTxt.textContent = " "
})