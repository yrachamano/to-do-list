//localStorage.setItem('teste', 'Luciano')
//
//sessionStorage.setItem('teste', 'Luciano2')

//const testeLocal = localStorage.getItem('teste')
//
//const testeSession = sessionStorage.getItem('teste')
//
//
//localStorage.removeItem('teste')
//
//divLocal.innerText = testeLocal
//
//divSession.innerText = testeSession
//

const divLocal = document.getElementById('local')
const divSession = document.getElementById('session')

const nomes = ['luciano', 'Renata', 'Bruno', 'Maria Clara']



localStorage.setItem('teste', JSON.stringify(nomes))

const recuperandoDados = JSON.parse(localStorage.getItem('teste'))
console.log(typeof(recuperandoDados))

recuperandoDados.push('Gustavo')





recuperandoDados.forEach(element => {
    console.log(element)
});

const pessoas = [{
    nome: 'Luciano',
    idade: 30,
    altura: 1.78,
    profissao: 'professor'
},
{
 nome: 'Gustavo',
 idade: 18,
 altura: 1.80,
 profissao: 'maconheiro'
}]
localStorage.setItem('objetos', JSON.stringify(pessoas))

console.log(JSON.parse(localStorage.getItem('objetos')))



