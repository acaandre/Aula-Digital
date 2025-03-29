const emailInput = document.getElementById('email');      //busca a informação do email
const passwordInput = document.getElementById('password');  //busca a informação da senha

//função sincrônas - regra linha por linha

// função assincrôna - regra que não executa linha por linha. Aguarda alguma função, entrada de dado.
// função assincrona - ele só executa com uma ação anterior. 
// enquanto ele loga o resto da página, ele 

async function getAccounts(){
    await axios.get("http://localhost:3000/accounts").then((res) => {
        console.log(res.data)
    })
}

getAccounts();

// ev - evento da página
// register - nome da função

async function register(ev) {
    ev.preventDefault
    const email = emailInput.value;
    const password = passwordInput.value;

    await axios.post("http://localhost:3000/accounts", {
        email,
        password
    })

    console.log("Registrado com sucesso!");
}