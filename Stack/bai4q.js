/*Bài 2.2 – Kiểm soát hàng đợi ngân hàng
Một ngân hàng chỉ phục vụ tối đa 4 khách trong hàng đợi tại một thời điểm.
Khi khách mới đến (enqueue), nếu hàng đợi đầy thì in ra: "Hàng đợi đầy, vui lòng chờ".
Mỗi lần phục vụ 1 khách (dequeue), in ra "Đang phục vụ: <tên>".
Mô phỏng với 6 khách hàng đến: ["Lan", "Hải", "Minh", "Tú", "Nga", "Phong"]. */
class Queue{
    constructor(){
        this.item=[];
    }

    enqueue(pt){
        if(this.item.length < 4){
            return console.log("Hàng đợi đầy, vui lòng chờ");
        }
        return this.item.push(pt);
    }
    dequeue(){
        return this.item.shift();
    }
    
}