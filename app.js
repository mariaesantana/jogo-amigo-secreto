let amigos = [];
let nomeAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function adicionarAmigo() {
    let nomeDigitado = nomeAmigo.value;
    if(nomeDigitado == "") {
        alert("Por favor, insira um nome.");
    } else if (amigos.includes(nomeDigitado)) {
        alert("Esse nome já foi adicionado.");
    } else {
        amigos.push(nomeDigitado);
        nomeAmigo.value = "";
        resultado.innerHTML = ""; // Limpar o resultado do sorteio anterior
        atualizarLista();
    }  
}

function atualizarLista() {
    listaAmigos.innerHTML = "";
    for(let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if(amigos.length < 1) {
        alert("Não há nomes para sortear. Por favor, adicione um nome!");
    } else {
        let nomeAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[nomeAleatorio];
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
        limparLista()
    }

}

function limparLista() {
    amigos = [];
    listaAmigos.innerHTML = "";
}