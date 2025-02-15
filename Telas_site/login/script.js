// Cria as variáveis de armazenamento de informação
// E anexe a informação digitada através do document
// que irá buscar pelo ID identificado no html
// o value é para buscar somente o valor digitado, caso
// não tenha o value, ele irá buscar todo o doc html
//  

let emailInput = document.getElementById("email");
let senhaInput = document.getElementById("senha");

function login(){
    console.log("Fazendo Login");

    if(emailInput.value === "" || senhaInput.value === ""){
        alert("Preencha o seu email ou senha");
    } else{
        console.log(emailInput.value);
        console.log(senhaInput.value);
    }
}

