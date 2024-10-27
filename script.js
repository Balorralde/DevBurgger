
const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonEspecialDiscount = document.querySelector('.especial-discount')
const buttonTotalSum = document.querySelector('.total-sum')
const buttonVegansOnly = document.querySelector('.vegans-only')
const buttonSweetOptions = document.querySelector('.sweet-options')

function showAll(productsArray) {

    let mylist = ``

    productsArray.forEach((product) => {

        mylist += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$${product.price.toFixed(2)}</p>
                </li>
        
                `

    });

    list.innerHTML = mylist
}

function discount() {
    const discountedProducts = menuOptions.map(product => {
      const discountedPrice = product.price - product.price  * 0.15;
      return { ...product, price: discountedPrice };
    });
  
    showAll(discountedProducts)
  }

  function totalSum() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price,0)

    list.innerHTML = `
    <li>
    <p>O valor total dos Hambúrgueres é R$ ${totalValue.toFixed(2)}</p>
    </li>
    `
  }

  function veganOnly() {
    const vegans = menuOptions.filter(product =>  product.vegan)

    showAll(vegans)
  }

  function doceOnly() {
    const candy = menuOptions.filter(product => product.doce)

    showAll(candy)
  }
  
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonEspecialDiscount.addEventListener('click', discount)
buttonTotalSum.addEventListener('click', totalSum)
buttonVegansOnly.addEventListener('click', veganOnly)
buttonSweetOptions.addEventListener('click', doceOnly)