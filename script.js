const btnAdicionar = document.getElementById('adicionar')
const valorTarefa = document.getElementById('texto-input');
var itens = []





function criarTarefa(valorTarefa) {
    const li = document.createElement('li')


    li.innerHTML = `
    <p>${valorTarefa}</p>
    <div> 
    <button class="excluir"></button>
    <button class="concluir"></button>
    </div>`
    return li
}

function renderizarTarefa(tarefa) {
     const listaTarefas = document.querySelector('ul')

     listaTarefas.appendChild(tarefa)
}

btnAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();

    if (valorTarefa.value == '') {
        alert('Digite uma tarefa válida.')
    }
    else {
        const tarefa = criarTarefa(valorTarefa.value)
        renderizarTarefa(tarefa)
    }       

    valorTarefa.value = ''
})


const listaTarefas = document.querySelector('ul')

listaTarefas.addEventListener('click', (elemento) => {
    const itemClicado = elemento.target


    if (itemClicado.classList.contains('excluir')){
        itemClicado.parentElement.parentElement.remove()
    }
    if (itemClicado.classList.contains('concluir')){
        itemClicado.parentElement.parentElement.classList.toggle('concluido')
    }

}) 

    function salvadorMemoria () {
    let itensLista = Array.from(listaTarefas.children)

    for (let i = 0; i < itensLista.length; i++) {
        itens[i] = itensLista[i].innerHTML
    }
    let itensLocal = JSON.stringify(itens)
    localStorage.setItem('itens', itensLocal)
}

if (localStorage.getItem('itens')) {
    itens = JSON.parse(localStorage.getItem('itens'))
    itens.forEach( item => {
        rendereizarTarefa(item)
    })}