let info = [];

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

    if (nome.length < 3) {
        return alert("Informe um nome válido");
    }

    if (email === "") {
        return alert("É obrigatório preencher o email");
    }

    if(!email.includes("@")){
        return alert("É obrigatório o email conter '@' ");
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

    if (telefone === "") {
        return alert("É obrigatório informar seu telefone");
    }

    if (!/^[0-9]+$/.test(telefone)) {
        return alert("O telefone aceita apenas números");
    }

    if (cidade === "") {
        return alert("É obrigatório informar sua cidade");
    }

    if (estado === "") {
        return alert("É obrigatório informar seu estado");
    }

    let infon = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tiposangue: tiposangue,
        telefone: telefone,
        cidade: cidade,
        estado: estado,

    };

    info.push(infon);

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso! <br>" + "Nome: " + nome + "<br> Email:" + email + "<br> Idade:" + idade + "<br> Peso:" + peso + "<br> Tipo Sanguíneo:" + tiposangue + "<br> Telefone:" + telefone + "<br> Cidade:" + cidade + "<br> Estado:" + estado;
})