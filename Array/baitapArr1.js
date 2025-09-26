/*BT1: Viết chương trình cho người dùng nhập vào n phần tử số nguyên 
→ lưu vào mảng → in ra mảng vừa nhập. */
function taoMang(n){
    let mang = new Array();
    for(let i = 0; i<n; i++){
        let nhap= parseInt(prompt(`Nhập phần tử thứ ${i}`));
        mang.push(nhap);
    }
    console.log("Mảng được tạo là: ",mang);
    return mang;
}
let n = parseInt(prompt("Nhập số phần tử có trong mảng: "));
taoMang(n);

/*BT2: Tính tổng tất cả các phần tử trong mảng.
Tính giá trị trung bình của mảng.*/
function tinhTong(m){
    let dem = 0;
    for(let i = 0; i<m.length; i++){
        dem+=m[i];
    }
    console.log("Mảng: ",m);
    console.log("Kết quả tổng của mảng là: ",dem);
}
let m = [2,3,4,5,6,7,8]
tinhTong(m);
/*BT3: Viết hàm tìm phần tử lớn nhất và nhỏ nhất trong mảng. */
function timLNNN(a){
    let minArr;
    let maxArr;
    for(let i =0; i<a.length; i++){
        minArr= Math.min(...a);
        maxArr= Math.max(...a);
    }
        console.log("Mảng: ",a);
        console.log("Giá trị nhỏ nhất là: ",minArr);
        console.log("Giá trị lớn nhất là: ",maxArr);
}
let a = [9,35,67,8,23,4,5];
timLNNN(a);

/*BT4: Kiểm tra một phần tử y có tồn tại trong mảng không. */
function checkPT(g,y){
    let check;
    for(let i = 0; i<g.length; i++){
        if(g[i]===y){
            check= "có";
        } 
        if(g[i]!==y){
            check = "không có"
        }
    }
    console.log("Mảng BT4: ",g);
    console.log(`Số ${y} ${check} trong mảng`);
}
let g = [1,2,3,4,5,6];
checkPT(g,7);

/*BT5: Tính tổng và trung bình cộng các phần tử. */
function tinhTBC(c){
    let cong = 0;
    for(let i = 0; i<c.length; i++){
        cong+=c[i];
    }
    console.log("Mảng: ",c);
    console.log("Tổng: ",cong);
    console.log("TBC: ",cong/c.length);
}
let c = [1,2,3];
tinhTBC(c);
/*BT6: Đếm số phần tử dương, âm và bằng 0. */
function demDA(d){
    let demDuong=0;
    let demAm=0;
    let dem = 0;
    for(let i=0; i<d.length; i++){
        if(d[i]>0){
            demDuong++;
        } else if(d[i]<0){
            demAm++;
        }else{
            dem++;
        }
    }
    console.log("Mảng: ",d);
    console.log("Tổng số dương là: ",demDuong);
    console.log("Tổng số âm là: ",demAm);
    console.log("Tổng số 0 là: ",dem);
}
let d = [1,2,3,-4,-2,2,0,-4,3,0,0,4];
demDA(d);
/*BT7: Đếm số lần xuất hiện của một phần tử x trong mảng. */
function demPT(e,x){
    let dem = 0;
    for(let i = 0; i<e.length; i++){
        if(e[i]===x){
            dem++;
        }
    }
    console.log("Số lần xuất hiện của 1: ",dem);
}
let e = [1,2,3,2,3,45,6];
demPT(e,1);

