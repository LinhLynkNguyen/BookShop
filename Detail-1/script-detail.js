function test(params) {
    $.getJSON("../database.json",function(data) {
        console.log(data.Books);
    })
}