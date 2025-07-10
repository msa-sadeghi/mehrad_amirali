let allProducts = [
    {id:1, title:'Album 1', price:5, img:'./Images/Album 1.png', count:1},
    {id:2, title:'Album 2', price:15, img:'./Images/Album 2.png', count:1},
    {id:3, title:'Album 3', price:7, img:'./Images/Album 3.png', count:1},
    {id:4, title:'Album 4', price:9, img:'./Images/Album 4.png', count:1},
]

const shopItemsContainer = document.querySelector('.shop-items')

allProducts.forEach(function(product){
    let productContainer = document.createElement('div')
    productContainer.classList.add('shop-item')
    
    let productTitleSpan = document.createElement('span')
    productTitleSpan.classList.add('shop-item-title')
    productTitleSpan.innerHTML = product.title
    
    let productImageElem = document.createElement('img')
    productImageElem.classList.add('shop-item-image')
    productImageElem.setAttribute('src', product.img)
    
    let productDetailsContainer = document.createElement('div')
    productDetailsContainer.classList.add('shop-item-details')
    
    let productPriceSpan = document.createElement('span')
    productPriceSpan.classList.add('shop-item-price')
    productPriceSpan.innerHTML = product.price

    let productAddButton = document.createElement('button')
    productAddButton.innerHTML = "Add To Card"
    productAddButton.className = 'btn btn-primary shop-item-button'

    productDetailsContainer.append(productPriceSpan, productAddButton)
    productContainer.append(productTitleSpan, productImageElem, productDetailsContainer)
    shopItemsContainer.append(productContainer)



})