/*Bài 2.4 – Đảo ngược một hàng đợi
Cho một hàng đợi gồm các số [1, 2, 3, 4, 5].
Viết hàm để đảo ngược thứ tự trong hàng đợi (có thể dùng stack phụ trợ).
Kết quả sau khi đảo: [5, 4, 3, 2, 1]. */
class Queue{
    constructor(){
        this.item = [];
    }
    themSo(so){
        return this.item.push(so);
    }
    daoNguoc(){
        return this.item.reverse();
    }
    in(){
        return console.log(this.item);
    }
}
let mang = new Queue();
mang.themSo(1);
mang.themSo(2);
mang.themSo(3); 
mang.themSo(4);
mang.themSo(5);
mang.in();
mang.daoNguoc();  
mang.in();