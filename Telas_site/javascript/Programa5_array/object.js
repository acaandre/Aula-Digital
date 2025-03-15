const carro = {
    marca: "Ferrari",
    modelo: "F8",
    cor: "Vermelho",
    ano: 2025,
    preco: 3000000,
    placa: "ABC-1234",
    proprietario:{
        nome: "Gabriel",
        idade: 25,
    },
    ligar: () => {
        alert("Ligando o carro...")
    }
}

console.log(carro);

console.log(carro.marca);

const mensagem = `Bom dia ${carro.proprietario.nome}, seu carro: ${carro.marca}, ${carro.modelo} está pronto para ser retirado`;

console.log(mensagem);

// chamar uma função de um objeto - isso é chamado de método
// carro.ligar();

