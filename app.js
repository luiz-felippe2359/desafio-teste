alert('Bem vindo ao site!');
alert('Ola meu nome e fatasma e hoje sou seu assistente');
nome = prompt('qual e o seu nome');
alert(`Bem vindo ${nome}`);
idade = prompt('Qual a sua idade');
if (idade >=18) {
    alert('Legal voce pode participar do jogo');
} else  {
    alert('Voce não pode participar do jogo mais iremos abrir uma brecha pra voce');
}

alert('Vamos começar o jogo');
let numeroSecreto = parseInt(Math.random() * 10);
console.log(numeroSecreto);
let chute

while (chute != numeroSecreto) {
   chute = prompt('Escolha um numero de 1 a 10');
  if (chute == numeroSecreto) {
    alert(`Voce acertou o numero e ${numeroSecreto}`);
  } else {
    if (chute > numeroSecreto){
        alert(`O numero secreto e menor que ${chute}`);
    } else {
        alert(`O numero secreto e maior que ${chute}`);
    }
}
}