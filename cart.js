const getInputValueById = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '' ;
    return inputValue;
}
// if cart is exist in the local store it return that , or make a empty cart and return it .
const getShoppingCartFromLS=()=>{
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const addProductToDisplay = (product,quantity)=>{
    const productContainer = document.getElementById('display-products');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li);
}


const displayStoredProducts = () =>{
    const cart = getShoppingCartFromLS();
    // console.log(cart);
    for(const product in cart){
        const quantity = cart[product]
        addProductToDisplay(product,quantity);
        // console.log(product,quantity);
    }
}
displayStoredProducts();

const addProduct =()=>{
    const product = getInputValueById('product-name-field')
    const quantity = getInputValueById('product-quantity-field')
    // console.log(product,quantity);

    // set to LocalStorage and display .
    saveItemLocalStorage(product,quantity);
    //  addProductToDisplay(product,quantity);
}

const  showProductWithNewQuantity = (cart) =>{
    const productContainer = document.getElementById('display-products');
    productContainer.innerHTML='';
    const localStorageData = localStorage.getItem('cart');
    const localStorageParseData = JSON.parse(localStorageData);
    console.log(localStorageParseData);
    for(const item in localStorageParseData){
        const li = document.createElement('li');
        li.innerText = `${item} : ${cart[item]}`
        productContainer.appendChild(li);
    }
}

const saveItemLocalStorage = (product , quantity) => {
    const cart = getShoppingCartFromLS();
    
    // if exixt product , add new quantity with previous quantity 
    //else store new quantity under the product.
    if(!!cart[product]){
        cart[product] =parseInt(cart[product])  + parseInt(quantity);
        //make data JSON stringify to set localStorage .
        const  cartStringified = JSON.stringify(cart);
        // save to localstorage 
        localStorage.setItem('cart',cartStringified);
         showProductWithNewQuantity(cart);
    }
    else{
        cart[product] = quantity;
        addProductToDisplay(product,quantity);
        const  cartStringified = JSON.stringify(cart);
        localStorage.setItem('cart',cartStringified);
    }
    }

    const clearAll =()=>{
        localStorage.clear();
        const productContainer = document.getElementById('display-products');
        productContainer.innerHTML=''; 
    }






