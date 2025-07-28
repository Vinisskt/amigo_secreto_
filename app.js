//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaamigos = []

function exibirlista(amigo)
{
    const lista = document.getElementById("listaAmigos");
    const criarli = document.createElement('li');
    criarli.textContent = amigo;
    lista.appendChild(criarli);

}

function exibirtexto(tag, text)
{
    let taghtml = document.querySelector(tag);
    taghtml.innerHTML = text;
}

function sortearAmigo()
{
    if (listaamigos.length == 0)
    {
        exibirtexto("h2", "Adicione um amigo a lista")
    }
    else
    {
        let sorteioamigo = parseInt(Math.random() * listaamigos.length);
        let amigosortiado = listaamigos[sorteioamigo];
        exibirtexto('h2', `O amigo secreto é ${amigosortiado}`);
        listaamigos.splice(sorteioamigo, 1);
    }

}

function limparAdicionar()
{
    exibirtexto('h2', "Digite o nome dos seus amigos")
    let amigos = document.querySelector('input');
    amigos.value = '';
}

function adicionarAmigo()
{
    let amigo = document.querySelector('input').value;
    if (amigo == '')
    {
        exibirtexto('h2', "Por favor, digite um nome valido !")
    }
    else
    {
        listaamigos.push(amigo);
        console.log(listaamigos)
        limparAdicionar();
        exibirlista(amigo);
    }
    
}

