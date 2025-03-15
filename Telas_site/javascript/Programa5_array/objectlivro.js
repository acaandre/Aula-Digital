let nome = document.getElementById("nome");

let dataEmprestimo = document.getElementById("dataemprestimo");

let serie = document.getElementById("serie");

// Livro - crie propriedade e métodos de emprestar o livro
let livro = {
    titulo: "Senhor dos Aneis",
    ano: 1987,
    versao: 3,
    autor: "J.R.R. Tolkien",
    statusEmprestimo: false,
    proprietario:{
        nome: "Biblioteca Central",
        tombamento: 1456,
    },
    alugado:{
        nome: "",
        serie: "",
        dataInicialEmprestimo: "",
        dataFinalEmprestimo: "",
    },
    emprestado: () => {
        alert ("O livro foi alugado")
        livro.statusEmprestimo = true;
        livro.alugado.nome = nome.value;
        livro.alugado.serie = serie.value;
        livro.alugado.dataInicialEmprestimo = dataEmprestimo.value;
        // livro.alugado.dataFinalEmprestimo = new Date(2025, 7, dataEmprestimo.value + 7).toISOString();
        console.log(livro)
        return 
    }
}

console.log(livro);




