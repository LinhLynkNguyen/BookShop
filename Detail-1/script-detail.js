let book;
let id;

// lấy data từ trang home và hiển thị
function getData(event) {
     // console.log(1);
    console.log(event.data);
    book = event.data;
    let bookImage = document.getElementById("bookImage");
    bookImage.src = book.image;
    let bookName = document.getElementById("productName");
    bookName.innerHTML = book.name;
    let bookPrice = document.getElementById("price");
    bookPrice.innerHTML = book.price;
    let description = document.getElementById("description")
    let description_data = book.description;
    for (let i = 0; i < description_data.length; i++) {
        let p = document.createElement("p");
        p.innerHTML = description_data[i];
        description.appendChild(p);
    }
    let discount = document.getElementById("discount-text");
    discount.innerHTML = book.discount;
    window.removeEventListener("message",getData);
    id = book.id;
}
window.addEventListener("message",getData,false);

// function getIDfromButton(event)
// {
//     let button = event.target;
//     let purchasePage = window.open('../Purchase/purchase.html');
//     setTimeout(function sendMessage() {
//         console.log(button.id);
//         purchasePage.postMessage(button.id,"http://127.0.0.1:5500");
//     },3000);
// }
let amount = 0;
function Increase() {
    document.getElementById("number").innerHTML= ++amount;
}

function Decrease() {
    if(amount>0)
    {
        document.getElementById("number").innerHTML= --amount;
    }
}
let isShown = false;
function show() {
    let description = document.getElementById("description");
    if(isShown==true)
    {
        description.classList.remove("description-expand");
        isShown = false;
    }
    else
    {
        description.classList.add("description-expand");
        isShown = true;
    }
}
    

function putIntoStorage(book) {
    console.log(1);
    localStorage.setItem(id,{
        "book":book,
        "amount":amount
    });
    window.open('../Purchase/purchase.html');
}

