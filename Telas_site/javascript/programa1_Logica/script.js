//Calcular a area de um retangulo

let largura = prompt("Digite a largura do retângulo:");
console.log("Largura:" + largura, typeof largura);

let altura = prompt("Digite a altura do retângulo:");

console.log("Altura:" + altura, typeof altura);

let perimetro = (2*(Number(altura) + Number(largura)));

console.log("O perimero do retângulo é: " + perimetro);