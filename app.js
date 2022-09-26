const lista = document.getElementById("lista")
const listaGustos = document.getElementById("gustos")
const listaDisgustos = document.getElementById("disgustos")

let fragment = document.createDocumentFragment();

let informacionPersonal = ["Mide : 1,80m", "Peso : 79kg", "color cabello : cafe oscuro"]
let informacionGustos = ["Comida italiana", "Videojuegos", "etc..."]
let informacionDisgustos = ["Comida marina", "Calor", "Todo xd"]

informacionPersonal.map(info => {
    const li = document.createElement("li")
    li.textContent = info
    fragment.appendChild(li)
})

lista.appendChild(fragment)

informacionGustos.map(info => {
    const li = document.createElement("li")
    li.textContent = info
    fragment.appendChild(li)
})

listaGustos.appendChild(fragment)

informacionDisgustos.map(info => {
    const li = document.createElement("li")
    li.textContent = info
    fragment.appendChild(li)
})

listaDisgustos.appendChild(fragment)