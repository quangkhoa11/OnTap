/*Bài 3 – Quản lý vé xe buýt
Có một hàng đợi hành khách xếp hàng mua vé xe buýt.
Thêm lần lượt 6 hành khách: ["An", "Bình", "Chi", "Dung", "Em", "Phong"] vào hàng đợi.
Phục vụ lần lượt 3 người (sử dụng dequeue).
In ra danh sách còn lại trong hàng đợi.*/
class Queue{
    constructor(){
        this.item = [];
    }

    themHK(nguoi){
        return this.item.push(nguoi);
    }
    phucVu(){
        return this.item.shift();
    }
    in(){
        return console.log(this.item);
    }
}
let hangDoi = new Queue();
hangDoi.themHK("An");
hangDoi.themHK("Bình");
hangDoi.themHK("Chi");
hangDoi.themHK("Dung");
hangDoi.themHK("Em");
hangDoi.themHK("Phong");
hangDoi.in();
hangDoi.phucVu();
hangDoi.phucVu();
hangDoi.phucVu();
hangDoi.in();