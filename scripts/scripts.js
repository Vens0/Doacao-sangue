document.getElementById("formsangue").addEventListener("submit", function (e) {

    e.preventDefault();

    let nome = document.getElementById("nome").value;

    let email = document.getElementById("email").value;

    let idade = document.getElementById("idade").value;

    let peso = document.getElementById("peso").value;

    let tiposangue = document.getElementById("tiposangue").value;

    let telefone = document.getElementById("telefone").value;

    let cidade = document.getElementById("cidade").value;

    let estado = document.getElementById("estado").value;


    if (nome === "") {
        return alert("É obrigatório preencher o nome completo");
    }

    if (email === "") {
        return alert("É obrigatório preencher o email");
    }

    if (idade === "") {
        return alert("É obrigatório preencher a idade");
    }

    if (idade < 16) {
        return alert("É obrigatório ser maior de 16 anos");
    }

    if (peso === "") {
        return alert("É obrigatório preencher o peso");
    }

    if (peso < 50) {
        return alert("O peso mínimo para doar é de 50kg");
    }

    if (tiposangue === "") {
        return alert("É obrigatório informar o tipo sanguíneo");
    }

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso! <br>" + "Nome: " + nome;
})