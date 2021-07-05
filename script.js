let campo1 = document.getElementById("campo1")
let campo2 = document.getElementById("campo2")
let botao = document.getElementsByClassName("btn")[0]
const numberSorte = document.getElementsByClassName("numSorte")[0]

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min

}

botao.addEventListener ('click', () => {
    const sort = document.getElementById('sorteado')
    const min = Number(campo1.value)
    const max = Number(campo2.value)
    const resultado = random(min, max)
    
        if(numberSorte.classList[1] != "ns-1") {
            setTimeout(()=> {sort.innerHTML = resultado}, 1600)
        } else {
            sort.innerHTML = resultado
        }

    numberSorte.classList.add("ns-1")
    setTimeout(()=> {numberSorte.innerHTML = "<p>Seu número da sorte é:</p>"}, 500) 
    console.log(numberSorte.classList[1])
})


// Efeito no botão

botao.addEventListener("click", function(e) {
let x = e.layerX; 
let y = e.layerY;
    

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(function() {
        ripples.remove()
    },900)
})