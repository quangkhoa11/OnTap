/*Bài 2.3 – Quay vòng (Circular Queue mô phỏng)
Trong một trò chơi, người chơi lần lượt được phát lượt chơi theo vòng.
Tạo queue gồm 4 người chơi: ["A", "B", "C", "D"].
Mỗi lượt, người đầu tiên trong hàng đợi sẽ chơi, sau đó được đưa xuống cuối hàng 
(dequeue rồi enqueue lại).
Mô phỏng 6 lượt chơi và in ra người chơi trong từng lượt.*/
class Queue{
    constructor(){
        this.item=[];
    }

    enqueue(nguoi){
        return this.item.push(nguoi);
    }
    dequeue(){
        let a = this.item.shift();
        if(a){
            this.item.push(a);
        }
        return a;
    }
    print(){
        return console.log(this.item);
    }
}
let quay = new Queue();
quay.enqueue("A");
quay.enqueue("B");
quay.enqueue("C");
quay.enqueue("D");
quay.print();
quay.dequeue();
quay.print();

/*Bài 2.4 – Đảo ngược một hàng đợi
Cho một hàng đợi gồm các số [1, 2, 3, 4, 5].
Viết hàm để đảo ngược thứ tự trong hàng đợi (có thể dùng stack phụ trợ).
👉 Kết quả sau khi đảo: [5, 4, 3, 2, 1]. */