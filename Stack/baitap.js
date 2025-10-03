/*Bài 3:
Giả sử bạn có một hệ thống gửi tin nhắn. Tin nhắn được xếp vào hàng đợi, và mỗi giây sẽ gửi đi
1 tin. Viết chương trình thêm 5 tin nhắn vào queue. Mỗi giây lấy 1 tin nhắn ra và in "Đã gửi: ...".
Khi hết tin nhắn thì in "Hàng đợi trống". */
class Queue{
    constructor(){
        this.item=[];
    }
    tinNhan(mess){
        return this.item.push(mess)
    }
    layTinNhan(){               
        return this.item.shift();
    }
    in(){
        return console.log(this.item.toString());
    }
}
let tin = new Queue();
tin.tinNhan("You're my lover!!");
tin.tinNhan("I miss u too, but I don't speak out");
tin.tinNhan("Break up! I'm bored!");
tin.tinNhan("Yes, stop it!");
tin.tinNhan("That day, I will never forget it!");
tin.in();

let interval = setInterval(() => {
    let msg = tin.layTinNhan();
    if(msg) {
        console.log("Đã gửi: " + msg);
    } else {
        console.log("Hàng đợi trống");
        clearInterval(interval);
    }
}, 1000);


