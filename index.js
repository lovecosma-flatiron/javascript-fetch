// debugger

// let s = new String("red")
// const changeColor = (event) => {
//     if(event.target.style.backgroundColor === "red"){
//         event.target.style.backgroundColor = "blue"
//     } else {
//         event.target.style.backgroundColor = "red"
//     }
// }

// function whichKey(event){
//     console.log(event.keyCode);
// }
let itemsContainer = () => document.getElementById("items-container")
let items = []

const clearItemsContainer = event => {
    while (itemsContainer().firstChild) {
        itemsContainer().removeChild(itemsContainer().lastChild);
      }
}


function showItem(){
    
    clearItemsContainer()

    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    let img = document.createElement('img')
    let p = document.createElement("p")
    let p2 = document.createElement("p")

    h3.innerText = this.name
    p.innerText = this.price
    p2.innerText = this.description
    img.src = this.photo
    img.style.width = '200px'
    img.style.height = '200px'

    itemsContainer().appendChild(div)
    div.appendChild(h3)
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(p2)
}


const renderItems = (json) => {
// debugger
    for(let item of json){

        let div = document.createElement("div")
        let h3 = document.createElement("h3")
        let img = document.createElement('img')
        let p = document.createElement("p")
        let p2 = document.createElement("p")
        let button = document.createElement('button')

        div.id = item.id
        h3.innerText = item.name
        p.innerText = item.price
        p2.innerText = item.description
        img.src = item.photo
        img.style.width = '200px'
        img.style.height = '200px'
        button.innerText = 'show item'
        button.addEventListener('click', showItem.bind(item))
        // button.addEventListener('click', (item) => {


        // })
        
        

        itemsContainer().appendChild(div)
        div.appendChild(h3)
        div.appendChild(img)
        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(button)



        div.style.padding = '25px'
        items.push(item)
    }
}

const renderItem = (item) => {
    debugger
}

const getItems = () => {
    fetch("https://solflair-api.herokuapp.com/items")
    .then(resp => resp.json())
    .then(json => renderItems(json))
}


const getItem = () => {
    fetch("https://solflair-api.herokuapp.com/items")
    .then(resp => resp.json())
    .then(json => renderItem(json))
}


const startProgram = () => {
    
    getItems()
    
    
    let button = document.createElement('button')
    button.addEventListener('click', clearItemsContainer)
    document.body.appendChild(button)
    button.innerText = "clear items container"
}



document.addEventListener('DOMContentLoaded', startProgram)







// }