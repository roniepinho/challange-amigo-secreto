// inserindo os nomes no campo texto de amigos
let amigos = [];
let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';
for (let i = 0; i < amigos.length; i++){
    let item = document.createElement('li')
}

// adicionando nomes a lista
function adicionarAmigo(){
    let campoNome = document.getElementById('amigo')
    let nome = campoNome.value;
    if (nome === ''){
        alert('Por favor, insira um nome.')
        return;
    }
        if (amigos.includes(nome)) {
            alert('Nome duplicado, insira outro');
            return
        }
    amigos.push(nome)
    limparCampo();
    AtualizarLista();
    console.log(nome);
} 

// Função para inserir nomes em uma lista HTML
function AtualizarLista(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';
    amigos.forEach(function(nome) {
    lista.innerHTML += `<li>${nome}</li>`
    })
    }

AtualizarLista();

// botão "sortear amigo" com função de sortear um nome recebido da lista de maneira aleatoria
function sortearAmigo(){
    if (amigos.length === 0){
        alert('A lista de amigos esta vazia! Adicione um nome para sortear')
        return;
    }
    let amigosAleatorios = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigosAleatorios];
    document.getElementById("resultado").innerHTML = `🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>`;
    amigos.splice(amigosAleatorios, 1);
    AtualizarLista();
} 


// limpar o campo de entrada
function limparCampo(){
    nome = document.getElementById('amigo')
    nome.value = '';
}
