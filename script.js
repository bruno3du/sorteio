const campo1 = document.getElementById("campo1")
const campo2 = document.getElementById("campo2")
const botao = document.getElementById("botao")

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min

}


botao.addEventListener ('click', () => {
    const sort = document.getElementById('sorteado')
    const min = Number(campo1.value)
    const max = Number(campo2.value)
    const resultado = random(min, max)
    sort.innerHTML = resultado
})