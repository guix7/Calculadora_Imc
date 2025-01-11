function escolhaSexo() {
    const homem = document.getElementById("homem");

    const mulher = document.getElementById("mulher");

    if (mulher.checked) {
        document.getElementsByClassName('resultadoHomem')[0].classList.add('esconder');
        document.getElementsByClassName('resultadoMulher')[0].classList.remove('esconder');

    } else if (homem.checked) {
        document.getElementsByClassName('resultadoMulher')[0].classList.add('esconder');
        document.getElementsByClassName('resultadoHomem')[0].classList.remove('esconder');

    }

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("homem").addEventListener("change", escolhaSexo);
    document.getElementById("mulher").addEventListener("change", escolhaSexo);
});

document.getElementById("botao").addEventListener("click", () => {
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const nome = document.getElementById("nome").value;
    let resultado = peso / (altura * altura);

    if(peso == "" || altura == "" || nome == ""){
        alert('Preencha todos os campos');
        return;
    }

    document.getElementsByClassName('homem-imc')[0].innerHTML = `${nome} seu Imc é ${resultado.toFixed(2)}`;

    document.getElementsByClassName('mulher-imc')[0].innerHTML = `${nome} seu Imc é ${resultado.toFixed(2)}`;

    
   

    if (resultado >= 40.0) {
        document.querySelectorAll('#obesidade3').forEach((elemento) => {
            elemento.classList.add('borda-vermelha');
        });
        document.querySelectorAll('#obesidade2').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#obesidade1').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#sobrepeso').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#normal').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#abaixo').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });

    }else if(resultado <= 39.9 && resultado >= 35.0){
        document.querySelectorAll('#obesidade2').forEach((elemento) => {
            elemento.classList.add('borda-vermelha');
        });
        document.querySelectorAll('#obesidade3').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#obesidade1').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#sobrepeso').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#normal').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#abaixo').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        

    }else if(resultado <= 34.9 && resultado >= 30.0){
        document.querySelectorAll('#obesidade1').forEach((elemento) => {
            elemento.classList.add('borda-vermelha');
        });
        document.querySelectorAll('#obesidade3').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#obesidade2').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#sobrepeso').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#normal').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#abaixo').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
    }else if(resultado <= 29.9 && resultado >= 25.0){
        document.querySelectorAll('#sobrepeso').forEach((elemento) => {
            elemento.classList.add('borda-vermelha');
        });
        document.querySelectorAll('#obesidade3').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#obesidade2').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#obesidade1').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#normal').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#abaixo').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
    }else if(resultado <= 24.9 && resultado >= 18.6){
        document.querySelectorAll('#normal').forEach((elemento) => {
            elemento.classList.add('borda-vermelha');
        });
        document.querySelectorAll('#obesidade3').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#obesidade2').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#obesidade1').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#sobrepeso').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#abaixo').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
    }else if(resultado <= 18.5){
        document.querySelectorAll('#abaixo').forEach((elemento) => {
            elemento.classList.add('borda-vermelha');
        });
        document.querySelectorAll('#obesidade3').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#obesidade2').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#obesidade1').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#sobrepeso').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
        document.querySelectorAll('#normal').forEach((elemento) => {
            elemento.classList.remove('borda-vermelha');
        });
    }
});
    