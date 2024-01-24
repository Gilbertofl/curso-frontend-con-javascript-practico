const menuEmail = document.querySelector('.navbar-email');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

const buguerMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
buguerMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarroAside);
productDetailClose.addEventListener('click', closeProductDetailAside);
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

        if(!isAsideClosed) {
            shoppingCartContainer.classList.add('inactive');
        }
    
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarroAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
        if(!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive');
        }
        if(!isDesktopClosed) {
            desktopMenu.classList.add('inactive');
        }
        if(!isProductDetailClosed) {
            productDetailContainer.classList.add('inactive');
        }
        shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetail() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

//Array list
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Licuadora',
    price: 213,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pan',
    price: 123123,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

//La creacion de una funcion para encapsular el funcionamiento de la
//array, ayuda mucho y para hacer funcionarla, hacemos referencia
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
        // maquetacion de html con javascript
        productInfoDiv.append(productPrice, productName);
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productCard);
    }
}
//llamamos la funcion y le indicamos el sistema de array que va a redenrizar
renderProducts(productList);