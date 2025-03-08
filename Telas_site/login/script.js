// Cria as variáveis de armazenamento de informação
// E anexe a informação digitada através do document
// que irá buscar pelo ID identificado no html
// o value é para buscar somente o valor digitado, caso
// não tenha o value, ele irá buscar todo o doc html
//  

let emailInput = document.getElementById("email");
let senhaInput = document.getElementById("senha");
let button = document.getElementById("button");

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
    erroremail.classList.add("hidden"); // desaparece o texto erro email
    errorPassword.classList.add("hidden"); // desaparece o texto erro senha
    
    button.innerHTML = '<i class="fa-solid fa-spinner animate-spin"></i>'  // Troca o icone do botão entrar pela animação
    button.disabled = true;   // desabilitar o botão

    setTimeout( () => {
        button.innerHTML = "Entrar";
        button.disabled = false;
        
        Toastify({
            text: "Login efetuado com sucesso",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "black",
            },
            onClick: function(){} // Callback after click
          }).showToast();
       

    }, 3000);

    // () => {} - Aerofunction
    // () - Parametros
    // {} - Funções a serem executadas
    // verificando se o usuário estar cadastrado.
    // setTimeout(); - setTimeout(code - código que será executado, delay - tempo de espera);

    }   
}

// errorPassword = document.querySelector() - Busca qualquer elemento


// if(emailInput.value === "" || ){
    //     alert("Preencha o seu email ou senha");
    // } else{
    //     console.log(emailInput.value);
    //     console.log(senhaInput.value);
    // }