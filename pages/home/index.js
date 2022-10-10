const createCard = (product) => {

    const { title, category, price, img, band, year, id } = product

    const main = document.querySelector('main');

    const sectionCards = document.createElement('section');
    sectionCards.classList.add('albuns-section')
    sectionCards.setAttribute('id', id)

    const imgCard = document.createElement('img')
    imgCard.setAttribute('id', 'imgCard-id')
    imgCard.src = (img)

    const divInfoCard = document.createElement('div')
    divInfoCard.classList.add('group-name-year')
    divInfoCard.setAttribute('id', 'group-name-year-id')

    const groupName = document.createElement('small')
    groupName.classList.add('name-year-text')
    groupName.innerText = (band)

    const albumYear = document.createElement('small')
    albumYear.classList.add('name-year-text')
    albumYear.innerText = (year)

    const groupTitle = document.createElement('h4')
    groupTitle.classList.add('music-name')
    groupTitle.innerText = (title)

    const priceBuy = document.createElement('div')
    priceBuy.classList.add('price-buy-div')

    const priceH4 = document.createElement('h4')
    priceH4.classList.add('price')
    priceH4.innerText = (`R$ ${price}`)

    const buttonBuy = document.createElement('button')
    buttonBuy.classList.add('buy-button')
    buttonBuy.setAttribute('id', category)
    buttonBuy.type = ('submit')
    buttonBuy.innerText = ('Comprar')


    divInfoCard.append(groupName, albumYear)
    priceBuy.append(priceH4, buttonBuy)
    sectionCards.append(imgCard, divInfoCard, groupTitle, priceBuy)
    main.append(sectionCards)

    return main
}


const creatCards = (arrProducts) => {
    let deleteMainContent = document.querySelector('main')
    deleteMainContent.innerHTML = ""
    arrProducts.forEach(value => {
        createCard(value)
    });
}
creatCards(products)

const createButton = (category, index) => {

    const genderButtonDiv = document.getElementById('musical-gender-id')

    const genderButton =  document.createElement('button')
    genderButton.classList.add('button-gender-defalt')
    genderButton.type = ('submit')
    genderButton.innerText = category
    genderButton.setAttribute('id', category)

    console.log(category)
    genderButton.addEventListener("click", () => {
        if (index === 0){
            creatCards(products)
        }else{
            let arrFiltered = products.filter(item => {
                return item.category === index
            })
            creatCards(arrFiltered)
        }
    })
    genderButtonDiv.append(genderButton)
}

const arrCategories = (arrCategory) => {
    arrCategory.forEach((value, index) => {
        createButton(value, index)
    })
}
arrCategories(categories)




function createInputRange(){
    const inputRangeSection = document.querySelector('.define-price-section')

    const divDefinePriceMaxPrice = document.createElement('div')
    divDefinePriceMaxPrice.classList.add('definePrice-maxPrice')

    const h4DefinePrice = document.createElement('h4')
    h4DefinePrice.classList.add('define-price')
    h4DefinePrice.innerText = ('Definir Preço')

    const pMaxPrice = document.createElement('p')
    pMaxPrice.classList.add('max-price')
    pMaxPrice.setAttribute('id', 'max-price-id')
    

    const inputRange = document.createElement('input')
    inputRange.type = ('range')
    inputRange.classList.add('input-bar')
    inputRange.setAttribute('id', 'input-price-bar')
    inputRange.max = 100
    inputRange.addEventListener("input", () => {
        pMaxPrice.innerText = (`R$ ${inputRange.value}`)
        let arrFiltered = products.filter(item => {
            return item.price <= inputRange.value
        })
        creatCards(arrFiltered)
    })
    pMaxPrice.innerText = (`R$ ${inputRange.value}`)

    divDefinePriceMaxPrice.append(h4DefinePrice, pMaxPrice)
    inputRangeSection.append(divDefinePriceMaxPrice, inputRange)

    return inputRangeSection
}
createInputRange()

