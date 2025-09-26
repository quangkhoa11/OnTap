//Ví dụ về Object
let newOb = {
    name: "khoa",
    age: 22,
    address: "HCM" 
};
console.log(newOb['name']); //khoa
//Map
let map = new Map();
map.set("name","khoa");
map.set("age",22);
map.set("address", "HCM");
console.log(map.get('name')); //khoa
/*BT1: Tạo một HashMap lưu tên và tuổi của 3 người. In ra toàn bộ key và value.*/
let hashMap = new Map();
hashMap.set("Khoa",22);
hashMap.set("Khang",16);
hashMap.set("Nhi",22);
console.log(hashMap);
// Viết bằng object
let hashMap2 = {
    "Khoa": 22,
    "Khang": 16,
    "Nhi": 22
}
console.log(hashMap2);
/*BT2 :Viết chương trình kiểm tra xem một key có tồn tại trong HashMap hay không. */
let hashMap3 = new Map();
hashMap3.set("album","ttpd");
hashMap3.set("singer","TS");
hashMap3.set("year",2024);
if(hashMap3.has('singer')){
    console.log("Yes");
}
else{
    console.log('No');
}
/*BT3 :Đếm số lần xuất hiện của từng chữ cái trong một chuỗi (dùng HashMap để lưu chữ cái và số lần).
Ví dụ: "banana" → {b:1, a:3, n:2} */
let test = "banana";
let demKyTu = {};

for (let kyTu of test) {
    if (demKyTu[kyTu]) {
        demKyTu[kyTu]++;
    } else {
        demKyTu[kyTu] = 1;
    }
}
console.log(demKyTu);
/*BT4: Lưu danh bạ điện thoại bằng HashMap (key = tên, value = số điện thoại). 
Viết hàm tìm số điện thoại theo tên. */
let thongTin = {
        "Lê Quang Khoa": "0982637283",
        "Đỗ Nam Trung": "738495004",
        "Phan Đại": "3738499330"
    };
function timTT(ten){
    if(thongTin[ten]){
        console.log(`Số điện thoại của ${ten} là: ${thongTin[ten]}`);
    }else{
        console.log("Không có tên này!!")
    }
}
let ten = "Lê Quang Khoa";
timTT(ten);