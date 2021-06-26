database = {
    "books":[
        {
            "id":1,
            "name":"Nhà giả kim",
            "price":51200,
            "description":[
                "Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con người.",
                "Tiểu thuyết Nhà giả kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái, giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông. Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho toàn nhân loại, vượt ra ngoài biên giới quốc gia, Nhà giả kim đã làm rung động hàng triệu tâm hồn, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời người đọc.",
                "“Nhưng nhà luyện kim đan không quan tâm mấy đến những điều ấy. Ông đã từng thấy nhiều người đến rồi đi, trong khi ốc đảo và sa mạc vẫn là ốc đảo và sa mạc. Ông đã thấy vua chúa và kẻ ăn xin đi qua biển cát này, cái biển cát thường xuyên thay hình đổi dạng vì gió thổi nhưng vẫn mãi mãi là biển cát mà ông đã biết từ thuở nhỏ. Tuy vậy, tự đáy lòng mình, ông không thể không cảm thấy vui trước hạnh phúc của mỗi người lữ khách, sau bao ngày chỉ có cát vàng với trời xanh nay được thấy chà là xanh tươi hiện ra trước mắt. ‘Có thể Thượng đế tạo ra sa mạc chỉ để cho con người biết quý trọng cây chà là,’ ông nghĩ.”",
                "- Trích Nhà giả kim",
                "Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ..."
            ],
            "image":"../Assets/NhaGiaKim.jpg"
        },
        {
            "id":2,
            "name":"Chuyện Con Mèo Dạy Hải Âu Bay (Tái Bản 2019)",
            "price":31850,
            "description":[
                "Cô hải âu Kengah bị nhấn chìm trong váng dầu – thứ chất thải nguy hiểm mà những con người xấu xa bí mật đổ ra đại dương. Với nỗ lực đầy tuyệt vọng, cô bay vào bến cảng Hamburg và rơi xuống ban công của con mèo mun, to đùng, mập ú Zorba. Trong phút cuối cuộc đời, cô sinh ra một quả trứng và con mèo mun hứa với cô sẽ thực hiện ba lời hứa chừng như không tưởng với loài mèo:",
                "Không ăn quả trứng.",
                "Chăm sóc cho tới khi nó nở.",
                "Dạy cho con hải âu bay.",
                "Lời hứa của một con mèo cũng là trách nhiệm của toàn bộ mèo trên bến cảng, bởi vậy bè bạn của Zorba bao gồm ngài mèo Đại Tá đầy uy tín, mèo Secretario nhanh nhảu, mèo Einstein uyên bác, mèo Bốn Biển đầy kinh nghiệm đã chung sức giúp nó hoàn thành trách nhiệm. Tuy nhiên, việc chăm sóc, dạy dỗ một con hải âu đâu phải chuyện đùa, sẽ có hàng trăm rắc rối nảy sinh và cần có những kế hoạch đầy linh hoạt được bàn bạc kỹ càng…",
                "Chuyện con mèo dạy hải âu bay là kiệt tác dành cho thiếu nhi của nhà văn Chi Lê nổi tiếng Luis Sepúlveda – tác giả của cuốn Lão già mê đọc truyện tình đã bán được 18 triệu bản khắp thế giới. Tác phẩm không chỉ là một câu chuyện ấm áp, trong sáng, dễ thương về loài vật mà còn chuyển tải thông điệp về trách nhiệm với môi trường, về sự sẻ chia và yêu thương cũng như ý nghĩa của những nỗ lực – “Chỉ những kẻ dám mới có thể bay”.",
                "Cuốn sách mở đầu cho mùa hè với minh họa dễ thương, hài hước là món quà dành cho mọi trẻ em và người lớn.",
                "Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ..."
            ],
            "image":"../Assets/ChuyenConMeoDayHaiAuBay.jpg"
        },
        {
            "id":3,
            "name":"Hoàng tử bé",
            "image":"../Reference/Hoangtube.jpg"
        }
    ]
}
let bookTemp;
let idTemp;
function searchForId(id) {
    idTemp = id;
    database.books.forEach(element => {
        // console.log(element.id);
        if(element.id==id)
        {
            bookTemp = element;
        }
    });
}

function openDetail(event) {
    let button = event.target;
    searchForId(button.id);
    // bookTemp = book;
    let detailWindow = window.open("../Detail-1/detail-1.html");
    setTimeout(()=>{
        detailWindow.postMessage(bookTemp,"http://127.0.0.1:5500");
    },500);
}