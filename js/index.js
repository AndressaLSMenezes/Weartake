let carrinho = []
const sectionProducts = document.querySelector('.products')

function cards (arr) {

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
            divCarrinho.innerHTML = ''
            carrinho.push(arr[i])
            cardsCarrinho(carrinho)
            divTotal.innerHTML = ''
            total(carrinho)
        })

        divText.classList = "products_lista_item_text"
        
        liCard.appendChild(divText)

        liCard.classList = "products_lista_item"
        ulLista.appendChild(liCard)

    }


    sectionProducts.appendChild(ulLista)

    return sectionProducts
}

const divCarrinho = document.querySelector('.carrinho_compras_products')

function cardsCarrinho (arr) {
    
    const ul = document.createElement('ul')
    ul.classList = "carrinho_compras_products_lista"

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

            if(carrinho.length == 0) {
                divCarrinho.innerHTML = ''
                divTotal.innerHTML = ''
                carrinhoVazio ()
            } else {
                divCarrinho.innerHTML = ''
                divTotal.innerHTML = ''
                total (carrinho)
                cardsCarrinho(carrinho)
            }
        })

        divTexto.appendChild(buttonRemove)

        divTexto.classList = "carrinho_compras_item_text"
        liCarrinho.appendChild(divTexto)

        ul.appendChild(liCarrinho)
    }

    divCarrinho.appendChild(ul)

    return divCarrinho
}

function carrinhoVazio () {

    const h2Carrinho = document.createElement('h2')
    const pAdd = document.createElement('p')

    h2Carrinho.innerText = 'Carrinho vázio'
    h2Carrinho.classList = 'h2Carrinho'
    divCarrinho.appendChild(h2Carrinho)

    pAdd.innerText = 'Adicione itens'
    pAdd.classList = 'pAdd'
    divCarrinho.appendChild(pAdd)

    return divCarrinho
}
carrinhoVazio ()

let camisetas  = []
let acessorios = []
let calcados   = []


function selector (arr) {

    cards (arr)

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].tag[0] == "Camisetas") {
            camisetas.push(arr[i])
        } else if (arr[i].tag[0] == "Acessórios"){
            acessorios.push(arr[i])
        } else if(arr[i].tag[0] == "Calçados") {
            calcados.push(arr[i])
        }
    }


    const buttonTodos = document.getElementById("buttonTodos");
    buttonTodos.addEventListener("click", function () {
        sectionProducts.innerHTML = ''
        return cards(arr)
    });

    const buttonAcessorios = document.getElementById("buttonAcessorios");
    buttonAcessorios.addEventListener("click", function () {

        sectionProducts.innerHTML = ''
        return cards(acessorios)

    });

    const buttonCalcados = document.getElementById("buttonCalcados");
    buttonCalcados.addEventListener("click", function () {
        
        sectionProducts.innerHTML = ''

        return cards(calcados)
    });

    const buttonCamisetas = document.getElementById("buttonCamisetas");
    buttonCamisetas.addEventListener("click", function () {
        
        sectionProducts.innerHTML = ''

        return cards(camisetas)
    });
    return sectionProducts
}

selector(data)

const divTotal = document.querySelector(".carrinho_compras_total")

function total (arr) {
    let quantidade = 0
    let valor = 0

    quantidade = arr.length

    for(let i = 0; i< arr.length; i++) {

        valor += arr[i].value  
    }

    const ul          = document.createElement('ul')
    const liQuatidade = document.createElement('li')
    const pQuatidade  = document.createElement('p')
    const pNumero     = document.createElement('p')

    const liTotal     = document.createElement('li')
    const pTotal      = document.createElement('p')
    const pValor      = document.createElement('p')

    pQuatidade.innerText = 'Quantidade'
    pQuatidade.classList = 'bold'

    liQuatidade.appendChild(pQuatidade)

    pNumero.innerText = quantidade
    liQuatidade.appendChild(pNumero)

    pTotal.innerText = 'Total'
    pTotal.classList = 'bold'
    liTotal.appendChild(pTotal)

    pValor.innerText = valor.toLocaleString("pt-br", { style: "currency", currency: "BRL", })
    liTotal.appendChild(pValor)

    ul.appendChild(liQuatidade)
    ul.appendChild(liTotal)

    divTotal.appendChild(ul)

    return divTotal
}



