
const button = document.querySelector('.odd button')

function calcular() {
    let input = document.querySelector('.odd input').value

   
    const res = (1 / parseFloat(input)) * 100
    const resFormatado = res.toFixed(2)

    const resText = document.querySelector('.resultado p')

    if(isNaN(res)){
        resText.innerHTML =`<p>DIGITE UM NÚMERO VÁLIDO.</p>`
        document.querySelector('.odd input').value = ''
        return
        
    }
    
    resText.innerHTML =`Segundo a casa de apostas, a odd <h2>${input}</h2> tem a probabilidade de <span>green</span>: <h1>${resFormatado}%</h1>`

    document.querySelector('.odd input').value = ''
    return
}

button.addEventListener('click', calcular)