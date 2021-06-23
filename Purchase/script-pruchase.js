
let purchaseItems;
const bookTemp = $(".product");
// function searchForBook(id) {
//     database.books.forEach(element => {
//         if(element.id==id)
//         {
//             bookTemp=element;
//         }
//     });
// }

function createBook(event) {
    let bookTemp = event.data;
    let newBook = bookTemp.clone();
    newBook.img.src = bookTemp.image;
    newBook.appendTo(".products");
}

window.addEventListener("message",(event)=>{
    if(event.data)
},false);

setInterval(() => {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    purchaseItems = values;
}, 500);
