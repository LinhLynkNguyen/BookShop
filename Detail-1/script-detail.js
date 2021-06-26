let book;
let id;
function getData(event) {
     // console.log(1);
    console.log(event.data);
    book = event.data;
    bookImage = document.getElementById("bookImage");
    bookImage.src = book.image;
    bookName = document.getElementById("productName");
    bookName.innerHTML = book.name;
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
    document.getElementById("number").innerHTML= --amount;
}

function putIntoStorage(book) {
    console.log(1);
    localStorage.setItem(id,{
        "book":book,
        "amount":amount
    });
    window.open('../Purchase/purchase.html');
}

