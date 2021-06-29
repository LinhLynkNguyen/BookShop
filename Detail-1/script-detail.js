let book;
let id;
let amount = 1;
function showImage(event) {
    let target = event.target;
    let id = target.id;
    let image = document.getElementById("bookImage");
    let imageSrc = book.images[id];
    if(imageSrc!=null)
    {
        image.src = imageSrc;
    } 
}


// lấy data từ trang home và hiển thị
function getData(event) {
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
    let collection = book.images;
    let imageContainer = document.getElementById("image_container")
    for (let i = 0; i < collection.length; i++) {
        // <img>
        let img = document.createElement("img");
        // <img src="...">
        img.src = collection[i];
        // <img src="..." class="collection-image">
        img.classList.add('collection-image');
        img.id = i;
        img.onclick = function(eventA){
            showImage(eventA)
        }
        imageContainer.appendChild(img);
    }
    let imgs = document.getElementsByClassName("collection-image");
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
        description.classList.add("description-shrink");
        isShown = false;
    }
    else
    {
        description.classList.remove("description-shrink");
        description.classList.add("description-expand");
        isShown = true;
    }
}
function putIntoStorage() {
    let bookName = JSON.stringify(book.name);
    let bookId = JSON.stringify(book.id);
    let bookImage = JSON.stringify(book.image);
    let bookPrice = JSON.stringify(book.price);
    let packet = [bookId,bookName,bookImage,bookPrice,amount];
    let bookToStorage = JSON.stringify(packet);
    localStorage.setItem(id,bookToStorage);
    let purchaseWindow = window.open('../Purchase/purchase.html');
    setTimeout(() => {
        purchaseWindow.postMessage(book.id,"http://127.0.0.1:5500");
    }, 10); 
}

