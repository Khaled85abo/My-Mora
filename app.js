const addToCartButtons = document.getElementsByClassName('card_btn')


for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)


}

function activateBtn() {
    const itemTitle = document.querySelectorAll('.cart-item-title').innerText
    var cardItemNames = document.querySelectorAll('.card_title')
    var button = document.querySelectorAll('.card_btn')
    for (var i = 0; i < cardItemNames.length; i++) {
        if (cardItemNames[i].innerText == itemTitle) {

            button.innerHTML = "Buy";
            button.disabled = false;


        }
    }



}

function deactivateBtn(event) {
    const button = event.target
    button.innerHTML = "In cart"
    button.disabled = true
}

function activateBtn2(event) {
    const button = event.target
    button.innerHTML = "buy"
    button.disabled = false
    console.log("works")
}

infoArray = []
itemInfo = {}

function addToCartClicked(event) {
    const button = event.target
    const shopItem = button.parentElement.parentElement
    const itemTitle = shopItem.getElementsByClassName('card_title')[0].innerText
    const priceWithString = shopItem.getElementsByClassName('price_text')[0].innerText
    const itemPrice = priceWithString.replace('Pris:', '');
    const itemText = shopItem.getElementsByClassName('card_text')[0].innerText
    const fullPathImg = shopItem.getElementsByClassName('imgSrc')[0].src
    const pos = fullPathImg.indexOf("public");
    const imageSrc = fullPathImg.slice(pos);

    addItemToCart(itemTitle, itemPrice, imageSrc, itemText);

    // itemInfo.itemPrice = itemPrice,
    //     itemInfo.itemText = itemText,
    //     itemInfo.itemTitle = itemTitle,
    //     itemInfo.imageSrc = imageSrc

    // infoArray.push(itemInfo)
    // console.log(infoArray)

    updateCartTotal()

    deactivateBtn(event);
}




function addItemToCart(itemTitle, itemPrice, imageSrc, itemText) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartProducts = document.getElementsByClassName('cart__products')[0]
    var cartItemNames = cartProducts.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == itemTitle) {
            // alert('This item is already added to the cart')
            // return


        }
    }

    var cartRowContents = `
    <div class="cart-item cart-column">
        <span class="cart-item-title">${itemTitle}</span>
        <span class="cart-price cart-column">${itemPrice}</span>
        <input class="cart-quantity-input" type="number" min="1" value = "1">
        <button class=" btn-remove" type="button">REMOVE</button>
    </div>`



    {
        /* <div class="cart-item">
            <span class="cart-item-title">Host</span>
            <span class="cart-price">1000 kr</span>
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn-remove" type="button">REMOVE</button>
        </div>
         */
    }


    cartRow.innerHTML = cartRowContents
    cartProducts.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}


function removeCartItem(event) {


    var removeBtnClicked = event.target

    const removeItem = removeBtnClicked.parentElement.parentElement

    removeBtnClicked.parentElement.parentElement.remove()
    updateCartTotal()

    // activateBtn2(event)

    for (var i = 0; i < addToCartButtons.length; i++) {
        //om 
        const itemTitle = removeItem.getElementsByClassName('cart-item-title')[0].innerText
        var button = addToCartButtons[i]
            /*  button.innerHTML = "Buy"
             button.disabled = false; */
        if (addToCartButtons[i].innerText == itemTitle) {

            button.innerHTML = "Buy";
            button.disabled = false;


        }
        console.log("works")
    }



}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart__products')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('kr', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.querySelector('#cart__summa').innerText = total + "Kr"
}

// looping through data from the cart and saving it to the local storage

function toInoivePageClicked() {
    var cartItems = document.getElementsByClassName('cart__products')[0]




    //  emptying all items from the cart and directing the page to the invoice page once the button kundkorg/checkout is pressed
    while (cartItems.hasChildNodes()) {

        var cartItemContainer = document.getElementsByClassName('cart__products')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-item')
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i]
            var price = cartRow.getElementsByClassName('cart-price')[i].textContent
            var quantity = cartRow.getElementsByClassName('cart-quantity-input')[i].value
            var title = cartRow.getElementsByClassName('cart-item-title')[i].textContent;

            console.log(price + quantity + title)
            itemInfo = {
                itemPrice: price,
                itemQuantity: quantity,
                itemTitle: title
            }
            console.log(itemInfo)
            console.log(itemInfo)
            infoArray.push(itemInfo)
            console.log(infoArray)
        }

        cartItems.removeChild(cartItems.firstChild)
            // window.location.href = "kundvagn.html";


    }
    updateCartTotal()
}
/* 

getBagButtons() {
    let buttons = [...document.querySelectorAll(".bag-btn")];
    buttonsDOM = buttons;
    buttons.forEach(button => {
        let id = button.dataset.id;
        let inCart = cart.find(item => item.id === id);

        if (inCart) {
            button.innerText = "In Cart";
            button.disabled = true;
        }
        button.addEventListener("click", event => {
            // disable button
            event.target.innerText = "In Cart";
            event.target.disabled = true;
            // add to cart
            let cartItem = {...Storage.getProduct(id), amount: 1 };
            cart = [...cart, cartItem];
            Storage.saveCart(cart);
            // add to DOM
            this.setCartValues(cart);
            this.addCartItem(cartItem);
            this.showCart();
        });
    });
} */