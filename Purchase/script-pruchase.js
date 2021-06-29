
let purchaseItems;

let amountOfProduct = 0;
let books = []
let id;

function getDataFromLocalstorage(id) {
    let book = localStorage.getItem(id);
    book = JSON.parse(book);
    let booksLocalStorage = localStorage.getItem("-1");
    // Nếu trong local storage không có gì
    if(booksLocalStorage==null)
    {
        booksLocalStorage[id] = book;
    }
    else
    {
        booksLocalStorage = JSON.parse(booksLocalStorage);
        booksLocalStorage[id][4] += book[4];
        let packet = JSON.stringify(booksLocalStorage);
        localStorage.setItem("-1",packet);
    }
}

function getId(event) {
    id = event.data;
    getDataFromLocalstorage(id);
}

window.addEventListener("message",getId,false);



function createBook(event) {
    setTimeout(() => {
    let newBookId = event.data;
    
    let product = document.createElement("div");
    product.classList.add("product");
    //  tạo các element
    let image = document.createElement("div");
    let productName =document.createElement("div");
    let amount = document.createElement("div");
    let decreaseButton =document.createElement("button");
    let increaseButton = document.createElement("button");
    let number = document.createElement("span");
    
    //appendChild
    product.appendChild(image);
    product.appendChild(productName);
    product.appendChild(amount);
    amount.appendChild(decreaseButton);
    amount.appendChild(number);
    amount.appendChild(increaseButton);

    //add class
    product.classList.add("product");
    product.classList.add("productClone");
    image.classList.add("image");
    productName.classList.add("productName");
    amount.classList.add("amount");
    decreaseButton.classList.add("decrease");
    increaseButton.classList.add("increase");
    number.classList.add("number");

    let products = document.getElementsByClassName("products");
    products = products[0];
    products.appendChild(product);
    
    }, 100);
}

window.addEventListener("message",createBook,false);


setInterval(() => {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    purchaseItems = values;
}, 500);
