//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// variaveis globais.
let listaamigos = [];
let lista = document.getElementById("listaAmigos");

// Funçoes do projeto

// exibi os texto interativos usando qualquer tag HTML
function exibirTexto(tag, text)
{
    let taghtml = document.querySelector(tag);
    taghtml.innerHTML = text;
}

// criar li com os nomes de cada amigo dentro do array lista de amigos.
function exibirLista(amigo, lista)
{
    lista.innerHTML = "";
    
    for (let i = 0; i < listaamigos.length; i++)
    {
        const criarli = document.createElement('li');
        criarli.textContent = listaamigos[i];
        lista.appendChild(criarli);
    }
}

// gera um numero aleatorio como indice para sorteio e retira o nome da lista e a tag li.
function sortearAmigo()
{
    if (listaamigos.length == 0)
    {
        exibirTexto("h2", "Adicione um amigo a lista");
    }
    else
    {
        let sorteioamigo = Math.floor(Math.random() * listaamigos.length);
        let amigosortiado = listaamigos[sorteioamigo];
        exibirTexto('h2', `O amigo secreto é ${amigosortiado}`);
        listaamigos.splice(sorteioamigo, 1); 
        lista.removeChild(lista.children[sorteioamigo]);
    } 
}

// limpa o input do amigo secreto para o proximo nome.
function limparAdicionar()
{
    exibirTexto('h2', "Digite o nome dos seus AMIGOS");
    let amigos = document.querySelector('input');
    amigos.value = '';
}

// acrescenta o nome no array.
function adicionarAmigo()
{
    let amigo = document.querySelector('input').value;

    for (let i = 0; i < listaamigos.length; i++)
    {
        if (amigo == listaamigos[i])
        {
            limparAdicionar();
            return;
        }
    }
    if (amigo == '')
    {
        exibirTexto('h2', "Por favor, Digite um nome valido !");
    }
    else
    {
        listaamigos.push(amigo);
        limparAdicionar();
        exibirLista(amigo, lista);
    }
    
}

// reinicia o amigo secreto.
function resetar()
{
    listaamigos.splice(listaamigos);
    exibirLista(amigo, lista);
    exibirTexto('h2', 'Digite o nome dos seus AMIGOS');
}

