
let purchaseItems;

let amountOfProduct = 0;
let books = []

function createBook(id,amount) {
    console.log(id);
    let newBook = localStorage.getItem(id);
    newBook = JSON.parse(newBook);

    setTimeout(() => {
    
    let product = document.createElement("div");
    product.classList.add("product");
    //  tạo các element
    let image = document.createElement("div");
    let bookImage = document.createElement("img")
    let productName =document.createElement("div");
    let amountField = document.createElement("div");
    let decreaseButton =document.createElement("button");
    let increaseButton = document.createElement("button");
    let number = document.createElement("span");
    let price = document.createElement("span");
    
    //assign value to product
    number.innerHTML = amount;
    bookImage.src = newBook[2];
    productName.innerHTML = newBook[1];
    price.innerHTML = newBook[3];
    decreaseButton.innerHTML = "-";
    increaseButton.innerHTML = "+";

    //appendChild
    product.appendChild(image);
    product.appendChild(productName);
    product.appendChild(amountField);
    product.appendChild(price);
    image.appendChild(bookImage);
    amountField.appendChild(decreaseButton);
    amountField.appendChild(number);
    amountField.appendChild(increaseButton);

    //add class and id
    product.classList.add("product");
    product.classList.add("productClone");
    image.classList.add("image");
    productName.classList.add("productName");
    amountField.classList.add("amount");
    decreaseButton.classList.add("decrease");
    increaseButton.classList.add("increase");
    number.classList.add("number");
    price.classList.add("bookPrice");
    number.id = id;

    let products = document.getElementsByClassName("products");
    products = products[0];
    products.appendChild(product);
    
    }, 100);
}

function getDataFromLocalstorage() {
    setTimeout(() => {
        let listOfAmount = localStorage.getItem("-1");
        listOfAmount = JSON.parse(listOfAmount);
        for (let index = 0; index < listOfAmount.length; index++) {
            if(listOfAmount[index]!=null)
            {
                createBook(index,listOfAmount[index]);
            }
        }
    }, 200);
 


    // let book = localStorage.getItem(id);
    // book = JSON.parse(book);
    // let booksLocalStorage = localStorage.getItem("-1");
    // booksLocalStorage = JSON.parse(booksLocalStorage);
    // // Nếu trong local storage không có gì
    // if(booksLocalStorage==null)
    // {
    //     booksLocalStorage[id] = book;
    // }
    // else
    // {
    //     booksLocalStorage[id][4] += book[4];
    //     let packet = JSON.stringify(booksLocalStorage);
    //     localStorage.setItem("-1",packet);
    // }
}

function getId() {
    setTimeout(() => {
        getDataFromLocalstorage();
    }, 500);
}

window.addEventListener("load",getId,false);
// window.addEventListener("message",getId,false);


// setInterval(() => {
//     var values = [],
//         keys = Object.keys(localStorage),
//         i = keys.length;

//     while ( i-- ) {
//         values.push( localStorage.getItem(keys[i]) );
//     }
//     purchaseItems = values;
// }, 500);
