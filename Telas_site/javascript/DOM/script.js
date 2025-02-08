// DOM - Estruturação do HTML com o JavaScript

// document.getElementById("titulo"); - Pega toda a estrutura com HTML, Texto, ID

let titulo = document.getElementById("titulo");

let novoTitulo = document.getElementById("AlterarTitulo");

function alterarTitulo(){
    const nome = novoTitulo.value;
    
    if(nome === ""){
        alert("Digite o seu Título")
    } 
    else{
        titulo.innerHTML = nome;
    }
}

// function alterarTitulo(){
//     const nome = novoTitulo.value;
    
//     if(nome === ""){
//         alert("Digite o seu nome")
//         return;
//     } 
//      titulo.innerHTML = nome;
//     
// }

//  Funções de Mudar e retornar o titulo
// function alterarTitulo(){
//     titulo.innerHTML = "Bom dia, Digital College.";
// }

function retorneTitulo(){
    titulo.innerHTML = "Olá, Mundo!";
}

// // titulo.innerHTML modifica o texto em html.
// titulo.innerHTML = "Olá Digital College";

// console.log(titulo)

