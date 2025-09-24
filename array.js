//*Array - là mảng chứa tập hợp tất cả các kiểu dữ liệu khác nhau

//Cách 1: khởi tạo mảng rỗng bằng [] 
let a = [];
console.log(a);
//có sẵn các phần tử bên trong
let b= [1,2,3,'Ari', true, [1,2,3]];
console.log(b);

//Cách 2: sử dụng array và constructor
let a1 = new Array();
console.log(a1);
//Có sẵn các phần tử bên trong
let b1 = new Array(1,2,3,"Kho",true,[2,34,5]);
console.log(b1);

//Tạo mảng với độ dài xác định, các phần tử là undefined
let c = new Array(5);
console.log(c);

//2. Truy xuất phần tử của mảng qua vị trí index
console.log("Kết quả là: ",b1[3]);

//3. Thuộc tính length - kiểm tra độ dài có trong mảng
console.log("Độ dài của mảng là: ",b1.length);

//4. Gán và thay đổi giá trị mảng qua index
/*Ví dụ: Tạo một mảng có các phần tử 1,2,3,4 in ra kết quả.
Thay đổi vị trí index 2 thành 10 và kiểm tra kết quả*/
let vd = new Array(1,2,3,4);
console.log("Trước khi đổi là: ",vd);
vd[2] = 10;
console.log("Sau khi đổi là: ", vd)

//5. Duyệt mảng:
let mang = [1,2,3,4,5];
console.log(mang);
let i;
for(let i = 0; i<mang.length; i++){
    mang[i]=mang[i] + 2;
}
console.log("Kết quả là: ", mang);
//Cách 2: dùng for...of dùng để xem hoặc kiểm tra các phần tử trong mảng
//ví dụ kiểm tra xem có bao nhiêu phần tử trong mảng chia hết cho 2
let dem =0;
for(let xem of mang){
    if(xem%2===0){
        console.log(xem);
        dem++;
    }
}
console.log(`Có ${dem} phần tử chia hết cho 2`);

//II. Các phương thức làm việc với mảng:
//1. concat(): nối 2 mảng khác nhau thành 1
let mang1 = [1,2,3];
let mang2 = [4,5,6];
let mang3 = [7,8,9];
let mangGop = mang1.concat(mang2,mang3);
console.log("Mảng sau khi gộp", mangGop); //[1,2,3,4,5,6,7,8,9]
//2. push(): thêm phần tử vào vị trí cuối mảng
let mang4 = [11,12,13];
mang4.push(1,2);
console.log(mang4); //[11,12,13,1,2]
//3. unshift(): thêm phần tử vào vị trí đầu mảng
let mang5 = [3,4,5];
mang5.unshift(1);
console.log(mang5); //[1,3,4,5]
//4. pop(): loại bỏ phần tử cuối cùng trong mảng và có thể xuất ra phần tử bị loại bỏ
let mang6 = [11,12,13];
let loaiBo = mang6.pop();
console.log("Mảng sau khi dùng pop(): ", mang6); //[11,12]
console.log("Phần tử đã loại bỏ là: ",loaiBo); //[13]
//5. shift(): loại bỏ phần tử đầu tiên trong mảng
let mang7 = [1,2,3,4];
let lBo = mang7.shift();
console.log("Mảng sau khi bỏ là: ",mang7); //[2,3,4]
console.log("Phần tử bị loại bỏ trong mảng là: ",lBo); //[1]