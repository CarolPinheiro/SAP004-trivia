function someDisplay (nome, aceitar,tema, matematica, html, final) {
    document.getElementById("primeira-parte").style.display = nome;
    document.getElementById("participar").style.display = aceitar;
    document.getElementById("escolha-tema").style.display = tema;
    document.getElementById("perguntas-matematica").style.display = matematica;
    document.getElementById("perguntas-html").style.display = html;
    document.getElementById("resultado-final").style.display = final;
}


let apresentacao = document.getElementById("ola-jogador")
var comecar = document.getElementById("comecar");
comecar.addEventListener("click", function() {
    var nome = document.getElementById("nome").value;
    apresentacao.innerHTML = "Seja bem vindo, " + nome + "!";
    someDisplay ("none", "block", "none","none","none","none");
    
}); 
 
var confirmar = document.getElementById("comecar-2");
confirmar.addEventListener("click", function() {
    if(document.getElementById("sim").checked) {
        someDisplay ("none", "none", "block","none","none","none");
    }
    else {
        alert ("opa blz vlw");
        someDisplay("none","none","none","none","none","none");
        apresentacao.style.display = "none";
        document.getElementById("nao-quis-jogar").innerHTML = "Claro, " + nome + " muito obrigada por acessar nosso jogo!";
    }
}); 


let botaoMatematica = document.getElementById("botao-matematica");
let botaoHtml = document.getElementById("botao-html");

botaoMatematica.addEventListener("click", function () {
    someDisplay ("none","none","none","block","none","none")});

botaoHtml.addEventListener("click", function () {
    someDisplay ("none","none","none","none","block","none")
});



let resultadoFinal = document.getElementById("resultado-final");


var checar = document.getElementById("comecar-mat");
checar.addEventListener("click", function() {       
    someDisplay ("none","none","none","none","none","block"); 
    if(document.getElementById("certa-1").checked) {
        resultadoFinal.innerHTML += "<p> Parabéns, resposta da questão 1 está certa! </p>"
    }
    else  {
        resultadoFinal.innerHTML += "<p> Resposta da questão 1 está errada, tente novamente :D </p>"
    }

    if(document.getElementById("certa-2").checked) {
        resultadoFinal.innerHTML += "<p> Parabéns, resposta da questão 2 está certa! </p>"
    }
    else  {
        resultadoFinal.innerHTML += "<p> Respostada questão 2 está errada, tente novamente :D </p>"
    }

    if(document.getElementById("certa-3").checked) {
        resultadoFinal.innerHTML += "<p> Parabéns, resposta da questão 3 está certa! </p>"
    }
    else  {
        resultadoFinal.innerHTML += "<p> Respostada questão 3 está errada, tente novamente :D </p>"
    }
        
});
;
 
var checarHtml = document.getElementById("comecar-html");
checarHtml.addEventListener("click", function() {  
    someDisplay ("none","none","none","none","none","block");  
    if(document.getElementById("certa-11").checked) {
        resultadoFinal.innerHTML += "<p> Parabéns, resposta da questão 1 está certa! </p>"
    }
    else  {
        resultadoFinal.innerHTML += "<p> Resposta da questão 1 está errada, tente novamente :D </p>"
    }

    if(document.getElementById("certa-22").checked) {
        resultadoFinal.innerHTML += "<p> Parabéns, resposta da questão 2 está certa! </p>"
    }
    else  {
        resultadoFinal.innerHTML += "<p> Resposta da questão 2 está errada, tente novamente :D </p>"
    }

    if(document.getElementById("certa-33").checked) {
        resultadoFinal.innerHTML += "<p> Parabéns, resposta da questão 3 está certa! </p>"
    }
    else  {
        resultadoFinal.innerHTML += "<p> Resposta da questão  3 está errada, tente novamente :D </p>"
    }
        
}); 

var retornoBotao = document.getElementById("retorno-jogo");
retornoBotao.addEventListener("click", function () { 
    someDisplay ('none','none','block','none','none','none');
})
