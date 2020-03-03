let nomeJogador = prompt("Insira seu nome:") ;
while (nomeJogador== "") {
    alert("Você precisa digitar um nome!")
    nomeJogador = prompt("Insira seu nome:");
}

let name = document.getElementById("nome-jogador");

name.innerHTML = "Bem vinda(o) " + nomeJogador;

let desejaJogar = prompt("Deseja jogar? \n Digite número correspondente a sua escolha: \n 1. Sim \n 2. Não");

if (desejaJogar == 1) {

    let primeiraPergunta = parseInt(prompt("Primeira Pergunda: \n Quanto é 2+2? \n Digite número correspondente a sua escolha: \n 1. 4 \n 2. 6 \n 3. 0"));
    if (primeiraPergunta === 1){
        let respostaCorreta1 = document.getElementById("resposta-correta-1");
        respostaCorreta1.innerHTML += "<p>Você acertou a questão 1</p>";
        
    } else {
         let respostaErrada1 = document.getElementById("resposta-errada-1");
        respostaErrada1.innerHTML += "Você errou a questão 1";
    }

    let segundaPergunta = parseInt(prompt("Segunda Pergunda: \n Quanto é 5*5? \n Digite número correspondente a sua escolha: \n 1. 40 \n 2. 60 \n 3. 25"));
    if (segundaPergunta === 3){
        let respostaCorreta2 = document.getElementById("resposta-correta-1");
        respostaCorreta2.innerHTML +=  "<p>Você acertou a questão 2</p>";
        
    } else {
         let respostaErrada2 = document.getElementById("resposta-errada-1");
        respostaErrada2.innerHTML += "Você errou a questão 2";
    }
     
    let terceiraPergunta = parseInt(prompt("Terceira Pergunda: \n Quanto é 9*9 ? \n Digite número correspondente a sua escolha: \n 1. 72 \n 2. 81 \n 3. 35"));
    if (terceiraPergunta === 2){
        let respostaCorreta3 = document.getElementById("resposta-correta-1");
        respostaCorreta3.innerHTML += "Você acertou a questão 3";
        
    } else {
         let respostaErrada3 = document.getElementById("resposta-errada-1");
        respostaErrada3.innerHTML += "Você errou a questão 3";
    }
     

} else {

    let naoJogar = document.getElementById("nao-jogar");
    name.innerHTML = "Obrigada por acessar o jogo " + nomeJogador + "!";
}
