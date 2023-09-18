const btnAdicionar = document.getElementById('adicionar')
const valorTarefa = document.getElementById('texto-input');

localStorage.setItem('lista', '')

const localTarefas = document.getElementById('tarefas')

localStorage.setItem('teste', JSON.stringify(nomes))

const recuperandoDados = JSON.parse(localStorage.getItem('teste'))
console.log(typeof(recuperandoDados))

recuperandoDados.push('Gustavo')



















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