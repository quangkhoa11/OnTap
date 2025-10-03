/*Bài 2 (Trung bình):
Mô phỏng quầy thu ngân siêu thị:
Khách hàng lần lượt đến và được thêm vào hàng đợi (enqueue).
Mỗi lần phục vụ thì khách đầu tiên sẽ rời đi (dequeue).
Viết chương trình xử lý 3 khách hàng và in ra trạng thái hàng đợi sau mỗi lần phục vụ. */
class Queue{
    constructor(){
        this.item=[];
    }

    enqueue(pt){
        return this.item.push(pt);
    }
    dequeue(){
        let b = this.item.shift();
        return console.log(`${b} đã phục vụ xong!`);
    }
    isEmpty(){
        return this.item.length===0;
    }
    print(){
        if(this.isEmpty()) return console.log("Hiện tại chưa có khách!!!!");
        return console.log("Tình trạng khách hiện tại:",this.item.toString());
    }
}
let queue = new Queue();
queue.enqueue("Khách hàng 1");
queue.enqueue("Khách hàng 2");
queue.enqueue("Khách hàng 3");
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();