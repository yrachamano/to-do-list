const btnAdicionar = document.getElementById('adicionar')
let listaTarefas = document.querySelector('ul')
const valorTarefa = document.getElementById('texto-input')

btnAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault()
    
    if (valorTarefa.value == '' ) {
        alert('Digite uma tarefa válida')
    } else {
        escutador()
        const tarefa = criarTarefa(valorTarefa.value)
        redereizarTarefa(tarefa)
        salvadorMemoria()
    }

    valorTarefa.value = ''
})

function criarTarefa (valorTarefa) {
    const li = document.createElement('li')
    li.innerHTML = `<span>
    ${valorTarefa}</span>
    <div>
        <button class="excluir"></button>
        <button class="concluir"></button>
    </div>
    `
    return li
}

function redereizarTarefa (tarefa) {
    const listaTarefas = document.querySelector('ul')
    listaTarefas.appendChild(tarefa)
}

function salvadorMemoria () {
    let itensLista = listaTarefas.innerHTML
    localStorage.setItem('itens', JSON.stringify(itensLista))
}

function escutador () {
    listaTarefas.addEventListener('click', (elemento) => {
        elemento.stopImmediatePropagation()

        const itemclickado = elemento.target;

        if (itemclickado.parentElement.classList.contains('excluir')) {
            itemclickado.parentElement.parentElement.parentElement.remove()
            salvadorMemoria()
        } else if (itemclickado.classList.contains('excluir')) {
            itemclickado.parentElement.parentElement.remove()
        } else if (itemclickado.parentElement.classList.contains('concluir')) {
            if (itemclickado.parentElement.parentElement.parentElement.firstChild.classList.contains('concluido')) {
                itemclickado.parentElement.parentElement.parentElement.firstChild.classList.remove('concluido')
            } else {
                itemclickado.parentElement.parentElement.parentElement.firstChild.classList.add('concluido')
            }
            
            salvadorMemoria()
        } else if (itemclickado.classList.contains('concluir')) {
            itemclickado.parentElement.parentElement.firstChild.classList.toggle('concluido')
            salvadorMemoria()
        }
    })
}

if (localStorage.getItem('itens')) {
    let codeInicio = JSON.parse(localStorage.getItem('itens'))
    listaTarefas.innerHTML = codeInicio
    listaTarefas = document.querySelector('ul')
    escutador()
}