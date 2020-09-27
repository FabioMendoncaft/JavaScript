let nome = window.prompt("Qual seu nome? ")
function calcular(){
    let peso = document.getElementById("peso")
    let altura = document.getElementById("altura")
    let res = document.getElementById("res")

    let p = Number(peso.value)
    let a = Number(altura.value)

    let resultado = p / (a * a)

    res.innerHTML = `Olá ${nome}, seu IMC é ${resultado.toFixed(1)}.`

    if(resultado < 18.5){
        res.innerHTML += `Você está abaixo do peso.`
    }else if(resultado < 24.9){
        res.innerHTML += `Você está no peso ideal.`
    }else if(resultado < 29.9){
        res.innerHTML += `Você levemente acima do peso.`
    }else if(resultado < 34.9){
        res.innerHTML += `Você está na obesidade grau 1.`
    }else if(resultado < 39.9){
        res.innerHTML += `Você está na obesidade grau 2.`
    }else{
        res.innerHTML += `Você está na obesidade grau 3.`
    }


}

