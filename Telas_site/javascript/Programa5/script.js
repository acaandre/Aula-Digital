console.log("olá mundo");

// arrays - variável com mais números
let frutas = ["Maçã", "Banana", "Laranja"];
let numeros = [1,2,3,4,5];

// chamar o array
console.log(frutas);

//chamar um número específico do array
console.log(frutas[0]);
console.log(frutas[2]);

// chamar o array
console.log(numeros);


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

let Frutas5 = ["maça", "banana", "laranja", "manga", "morango"];

//Sliced - Corta o array, nomedoarray(PosiçãoDoElementoInicial[ConsideraOIndice_0,1,2], 
// PosiçãodoElementosFinal[1,2,3])

let frutas1 = Frutas5.slice(0,2);
let frutas2 = Frutas5.slice(2,4);

console.log(frutas1);
console.log(frutas2);

//Reverse() - inverte a ordem
let frutas3 = Frutas5.reverse();

console.log(frutas3);

// concat() - Concatenar arrays
let Frutas2 = ["Pera" , "Abacaxi"]
let Frutas3 = ["maça", "banana", "laranja", "manga", "morango"];

const frutasConcatenadas = Frutas3.concat(Frutas2);

console.log(frutasConcatenadas);


//Join(Juntar os elementos do array)
let numeros1 = [1,2,3,4,5];
const frutasJuntas = numeros1.join(" / ");

console.log(frutasJuntas)


//IndexOff - Qual indece do elemento
let Frutas7 = ["maça", "banana", "laranja", "manga", "morango"];

const index = Frutas7.indexOf("laranja");  // maça - 0, banana - 1, laranja - 2.

console.log(index)

//Includes (Verifica se o Elemento existe no array)
let Frutas8 = ["maça", "banana", "laranja", "manga", "morango"];

const temBanan = Frutas8.includes("banana");  // tem banana

const temGob = Frutas8.includes("goiaba");  // tem banana

console.log(temBanan)
console.log(temGob)

// Map (Mapear os elementos do array)
let Frutas9 = ["maça", "banana", "laranja", "manga", "morango"];

const frutasMap = Frutas9.map( (fruta) => { return fruta } ) 

console.log(frutasMap);

// Map (modifica cada elemento adiciona o texto "da lista")

const frutasMapMais = Frutas9.map( (fruta) => { return fruta + " da lista" } ) 

console.log(frutasMapMais);

// Map (modifica cada elemento adiciona o texto "da lista" e indice)

const frutasMapIndice = Frutas9.map( (fruta, indice) => { return fruta + " da lista" + " "+indice } ) 

console.log(frutasMapIndice);


// Map (modifica em outra array multiplicando cada elemento por 2)
let numeros2 = [1,2,3,4,5];
const numerosMap = numeros2.map( (numero) => { return numero * 2 } ) ;

console.log (numerosMap)
