/*Bài 1 (Dễ):
Tạo một hàng đợi lưu tên 5 học sinh. Sau đó:
In ra danh sách hàng đợi.
Lấy 2 học sinh đầu tiên ra khỏi hàng đợi.
In lại danh sách còn lại. */
class Queue{
    constructor(){
        this.items = [];
    }

    themHS(hs){
        return this.items.push(hs);
    }
    layHS(){
        return this.items.shift();
    }
    inKQ(){
        return console.log(this.items.toString());
    }
}
let quanLy = new Queue();
quanLy.themHS("An");
quanLy.themHS("Bình");
quanLy.themHS("Cảnh");
quanLy.themHS("Khang");
quanLy.themHS("Tuấn");
quanLy.inKQ();
quanLy.layHS();
quanLy.layHS();
quanLy.inKQ();