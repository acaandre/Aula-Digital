console.log("olá mundo");

function saudacao() {
    console.log("Bom dia");
}

saudacao();

function exibirNome(nome){
    console.log("Bom dia,", nome);
}

exibirNome("André");

function soma(numero1, numero2){
    const numero1Int = Number(numero1)
    const numero2Int = Number(numero2)
    
    return numero1Int + numero2Int;
}

const valor1 = Number(prompt("Digite Valor 1"));
const valor2 = Number(prompt("Digite Valor 2"));

console.log(soma(valor1, valor2));

// Função para verificar se o número é impar ou par:

const numero = Number(prompt("Vamos revificar se este número é impar ou par:"));

function verificaParOuImpar(numero){
    const num = Number(numero);
    
    if(num%2 === 0){
        return "O número é par"
    }
    else {
        return "O número é impar"
    }
    
}

console.log(verificaParOuImpar(numero));

function Maior(valor1, valor2){
    if(valor1 > valor2){
        return "O maior número é valor1 = "+ valor1
    }
    else{
        return "O maior número é valor2 = "+ valor2 
    }

}

console.log(Maior(valor1,valor2));