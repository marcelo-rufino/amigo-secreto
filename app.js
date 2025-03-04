let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if(!nomeAmigo) {
        alert("Digite o nome do amigo.");
        return;
    }

    nomeAmigo = nomeAmigo.charAt(0).toUpperCase() + nomeAmigo.slice(1).toLowerCase();

    if(amigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado.");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length <= 2) {
        alert("É necessário incluir 3 ou mais amigos.");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
}

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      adicionarAmigo();
    }
  });