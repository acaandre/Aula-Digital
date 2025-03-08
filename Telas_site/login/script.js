// Cria as variáveis de armazenamento de informação
// E anexe a informação digitada através do document
// que irá buscar pelo ID identificado no html
// o value é para buscar somente o valor digitado, caso
// não tenha o value, ele irá buscar todo o doc html
//  

let emailInput = document.getElementById("email");
let senhaInput = document.getElementById("senha");

let erroremail = document.getElementById("error-email");
let errorPassword = document.getElementById("error-password");

function login(){
    let email = emailInput.value;
    let senha = senhaInput.value;

   if( email === "" || senha === ""){
    if(email === ""){
        erroremail.classList.remove("hidden");
    } else if (senha === ""){
        errorPassword.classList.remove("hidden");
    } 
   } 
   else{
    erroremail.classList.add("hidden");
    errorPassword.classList.add("hidden");
    }   
}

// errorPassword = document.querySelector() - Busca qualquer elemento


// if(emailInput.value === "" || ){
    //     alert("Preencha o seu email ou senha");
    // } else{
    //     console.log(emailInput.value);
    //     console.log(senhaInput.value);
    // }