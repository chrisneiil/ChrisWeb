
let contador = 0;
function agregar_elemento() {
    let arrayCardPatito = ["te dije que no me clickearas :(", "detente.....", "bueno, eres terco", ".....", "adios...."];
    const dialogoPatito = document.getElementById('idPatito')
    const fragment = document.createDocumentFragment()
    if(contador<arrayCardPatito.length){
        const p = document.createElement('p')
        p.textContent = arrayCardPatito[contador]
        fragment.appendChild(p)
        dialogoPatito.appendChild(fragment)
        console.log(arrayCardPatito[contador], contador)
        contador++;

    }else if(contador===5){
        const image = document.createElement('img')
        image.src  = 'img/patoEnojao.jpg'

        fragment.appendChild(image)
        dialogoPatito.appendChild(fragment)
        contador++;
    }

}