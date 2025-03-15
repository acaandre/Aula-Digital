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

//Arrow Function ou Função Anônina, Função dentro de outra função - () => {}

// Filter (Filtrar os elementos do array)
// Filtre as frutaas que tenham o tamanho acima de 4 caracteres

let Frutas10 = ["maça", "banana", "laranja", "manga", "morango"];

let frutasFiltradas = Frutas10.filter((fruta) => {
    return fruta.length > 5;
})

console.log(frutasFiltradas);

// Find ( Encontra um elemento em array)
// Encontre uma fruta com a letra "a"

let Frutas11 = ["maça", "banana", "laranja", "manga", "morango", "abacaxi"];

let frutasEncontrada = Frutas11.find((fruta) => {
    return fruta[0] === "a";
})

let frutasEncontrada2 = Frutas11.find((fruta) => {
    return fruta === "morango";
})

console.log(frutasEncontrada2);
 //fruta.replace = iria demonstrar quantos caracteres tem cada fruta.

console.log(frutasEncontrada);


// reduce() - Reduz o array a um único valor
// reduzir o array a um único valor

const pagamentos = [4000, 2000, 5000, 1000];

// soma todos os pagamentos

const pagamentoTotal = pagamentos.reduce((acumulador, atual)=>{
    return acumulador + atual;
}, 0)

console.log(pagamentoTotal)

// Exercicios
// 1. Crie uma lista com 5 nomes dos alunos da turma e adicione um novo aluno no final da lista.

alunosDigital = ["André", "Daniel", "Bruno", "Jessica", "Gabriel"];

// Adiciona mais um elemento no array, bem no final.
alunosDigital.push("Menires");

console.log(alunosDigital);

// 2. Remova o último aluno da lista.

// Tira o último do array
alunosDigital.pop();

console.log(alunosDigital);

// 3. Crie uma lista com numeros acima de 10
const numeros10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const arrays10 = numeros10.filter((numeros)=>{return numeros > 10})

console.log(arrays10)

// 4. Use o Metodo map para dobrar os valores da lista de numeros acima


const numerosDobrar = numeros10.map( (numero) => { return numero *2 } ) 

console.log(numerosDobrar);
