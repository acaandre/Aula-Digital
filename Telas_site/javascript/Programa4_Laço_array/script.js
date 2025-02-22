// for 

for (let i = 1; i <=10; i++){

    console.log(i);

}

//array - vetor em posição 0 até a quantidade de final - 0, 1, 2, 3.
const lista = ["maça", "banana", "laranja", "manga", "morango"]

// length - tamanho do elemento do array, a quantidade de elementos
const NumeroDeElementos = lista.length;

console.log(NumeroDeElementos);

//chamado da lista
console.log(lista[0]);

// para chamar o último elemento

const ultimoElemento = lista[lista.length-1];

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}


// Repetição por While

// variavel
let x = 1;

//estrutura while - Repete e verifica sempre o grupo
while ( x <=5 ){
    //execução
    console.log(x);
    //condição para seguir
    x++
}

//jogo do adivinhação

console.log("jogo de adivinhação");

// variável digitado
let valorDigitado;

//estrutura de repetição while, será repetido até o número digitado ser 3
while (valorDigitado !== 3){
    //código para armazenar o valor digitado do usuário
    valorDigitado = Number(prompt("Digite um número de 1 a 10:"));
    
    if(valorDigitado !== 3){
        console.log("Digite Novamente");
    }
   
}

console.log("Parabéns você acertou!!!!")

//do while - Repetição que repete pelo menos uma vez a repetição e repete até 

let y = 1;

do {
    console.log(y);
    y++;
} while (y <=10);


// for of - repetição com função

const Frutas = ["maça", "banana", "laranja", "manga", "morango"];

for (let i of Frutas){
    console.log(i);
}


// callback -> é uma função com uma função como parâmetro.
const Frutas2 = ["maça", "banana", "laranja", "manga", "morango"];

//Map - metodo de array para apresentar e manipular os itens internos e seus indices no array
Frutas2.map((item, indice) => {console.log(`Meu item é ${item} e meu índice é ${indice}`); });

// neste Map - metodo de array para trocar um item do array por outro, sem alterar o array original
Frutas2.map((item, indice) => {
    if (item === "banana"){
        item = "pera";
    }
    
    console.log(`Meu item é ${item} e meu índice é ${indice}`); 
});

let Frutas3 = ["maça", "banana", "laranja", "manga", "morango"];

Frutas3[3] = "pera";

console.log(Frutas3);

let Frutas4 = ["maça", "banana", "laranja", "manga", "morango"];

// Adiciona mais um elemento no array, bem no final.
Frutas4.push("abacaxi");

console.log(Frutas4);

// Tira o último do array
Frutas4.pop();

console.log(Frutas4);

// Tira o primeiro elemento
Frutas4.shift();

console.log(Frutas4);

// Tira o primeiro elemento
Frutas4.unshift("melancia");

console.log(Frutas4);

// demonstra qual indice
console.log(Frutas4.indexOf("banana"));

//caso não exista, ele retorna -1


