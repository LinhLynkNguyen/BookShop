let book;
let id;
function getData(event) {
     // console.log(1);
    console.log(event.data);
    book = event.data;
    bookImage = document.getElementById("bookImage");
    bookImage.src = event.data.image;
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
let number = document.getElementsByClassName("number");
let amount = number[0].innerHTML
function Increase() {
    amount+=1;
}

function Decrease() {
    
}

function putIntoStorage(book) {
    console.log(1);
    localStorage.setItem(id,book);
    window.open('../Purchase/purchase.html');
}

