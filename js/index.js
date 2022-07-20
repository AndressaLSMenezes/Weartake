let carrinho = []
function cards (arr) {
    const sectionProducts = document.querySelector('.products')

    const ulLista     = document.createElement('ul')
    ulLista.classList = 'products_lista'
    
    for(let i = 0; i < arr.length; i++) {
        const liCard       = document.createElement('li')
        const figure       = document.createElement('figure')
        const imgCard      = document.createElement('img')
        const divText      = document.createElement('div')
        const divTag       = document.createElement('div')
        const pTag         = document.createElement('p')
        const h3Title      = document.createElement('h3')
        const pDescription = document.createElement('p')
        const pValue       = document.createElement('p')
        const buttonAdd    = document.createElement('button')

        imgCard.src = arr[i].img
        figure.appendChild(imgCard)

        figure.classList ='products_lista_item_image'
        liCard.appendChild(figure)

        pTag.innerText = arr[i].tag
        divTag.appendChild(pTag)

        divTag.classList = 'products_lista_item_text_tag'
        divText.appendChild(divTag)

        h3Title.innerText = arr[i].nameItem
        h3Title.classList = "products_lista_item_text_title"
        divText.appendChild(h3Title)

        pDescription.innerText = arr[i].description
        pDescription.classList = "products_lista_item_text_description"
        divText.appendChild(pDescription)

        pValue.innerText = arr[i].value.toLocaleString("pt-br", { style: "currency", currency: "BRL", })
        pValue.classList = "products_lista_item_text_value"
        divText.appendChild(pValue)

        buttonAdd.innerText = arr[i].addCart
        buttonAdd.classList = "products_lista_item_add_cart"
        divText.appendChild(buttonAdd)

        buttonAdd.addEventListener('click', function() {
            carrinho.push(arr[i])
            cardsCarrinho(carrinho)
        })

        divText.classList = "products_lista_item_text"
        
        liCard.appendChild(divText)

        liCard.classList = "products_lista_item"
        ulLista.appendChild(liCard)

    }


    sectionProducts.appendChild(ulLista)

    return sectionProducts
}


cards (data)


function cardsCarrinho (arr) {

    const ul = document.querySelector('.carrinho_compras_products_lista')
    ul.innerHTML = ''


    for(let i = 0; i < arr.length; i++) {

        const liCarrinho     = document.createElement('li')
        const figureCarrinho = document.createElement('figure')
        const imgcarrinho    = document.createElement('img')
        const divTexto       = document.createElement('div')
        const h4Titulo       = document.createElement('h4')
        const pValor         = document.createElement('p')
        const buttonRemove   = document.createElement('button')

        liCarrinho.classList = "carrinho_compras_item"

        imgcarrinho.src = arr[i].img
        figureCarrinho.appendChild(imgcarrinho)
        figureCarrinho.classList = "carrinho_compras_item_image"
        liCarrinho.appendChild(figureCarrinho)

        h4Titulo.innerText = arr[i].nameItem
        h4Titulo.classList = "carrinho_compras_item_text_title"
        divTexto.appendChild(h4Titulo)

        pValor.innerText = arr[i].value.toLocaleString("pt-br", { style: "currency", currency: "BRL", })
        pValor.classList = "carrinho_compras_item_text_value"
        divTexto.appendChild(pValor)

        buttonRemove.innerText = 'Remover produto'
        buttonRemove.classList = "carrinho_compras_remove"

        buttonRemove.addEventListener('click', function() {
            carrinho.splice(i, 1)
            cardsCarrinho(carrinho)
        })



        divTexto.appendChild(buttonRemove)

        divTexto.classList = "carrinho_compras_item_text"
        liCarrinho.appendChild(divTexto)

        ul.appendChild(liCarrinho)
    }

    return ul
}


























































// function selector (arr) {

//     let camisetas  = []
//     let acessorios = []
//     let calcados   = []

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].tag[0] == "Camisetas") {
//             camisetas.push(arr[i])
//         } else if (arr[i].tag[0] == "Acessórios"){
//             acessorios.push(arr[i])
//         } else if(arr[i].tag[0] == "Calçados") {
//             calcados.push(arr[i])
//         }
//     }
//     const div = document.querySelector('.products')
//     div.appendChild(cards(data))

//     const buttonTodos = document.getElementById("buttonTodos");
//     buttonTodos.addEventListener("click", function () {
//         div.appendChild(cards(data))
//     return cards(data)
//     });

//     const buttonAcessorios = document.getElementById("buttonAcessorios");
//     buttonAcessorios.addEventListener("click", function () {
//         div = ''
//         div.appendChild(cards(camisetas))
//         return cards(camisetas)
//     });

//     const buttonCalcados = document.getElementById("buttonCalcados");
//     buttonCalcados.addEventListener("click", function () {
       
//         div = ''
//         div.appendChild(cards(calcados))

//         return div
//     });

//     const buttonCamisetas = document.getElementById("buttonCamisetas");
//     buttonCamisetas.addEventListener("click", function () {
       
//         div = ''
//         div.appendChild(cards(camisetas))
//         return cards(camisetas)
//     });

//     return div
// }


// const buttonPesquisa = document.querySelector('findButton')

// buttonPesquisa.addEventListener('click', pesquisa(data))

// function pesquisa (arr) {
//     const inputPesquisa = document.querySelector('input')
//     const pesquisaText = inputPesquisa.value
//     let result = []
//     for(let i = 0; i < arr.length; i++) {
//         if(pesquisaText == arr[i].nameItem) {
//             result.push(arr[i])
//         }
//     }
//     const sectionProducts = document.querySelector('.products')
//     sectionProducts.innerHTML = ''

//     return cards(result)
// }