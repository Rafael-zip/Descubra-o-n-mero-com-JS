alert('Boas vindas ao jogo do numero secreto')
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;  
let tentativas = 1;

 //enquanto chute nao for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;   
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto e menor que ${chute}`);
        } else {
            alert(`O numero secreto e maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número ${numeroSecreto} com ${tentativas}  ${palavraTentativa} `);

// if (tentativas > 1) {
 //   alert(`Isso ai! Você descobriu o número ${numeroSecreto} com ${tentativas} tentativas `);
// } else {
 //   alert(`Isso ai! Você descobriu o número ${numeroSecreto} com ${tentativas} tentativa`);
// }

