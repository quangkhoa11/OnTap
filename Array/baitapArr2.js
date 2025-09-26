/*BT8: Đảo ngược mảng (reverse array). */
function daoArr(a){
    console.log("Mảng BT8: ",a);
    console.log("Mảng đảo: ",a.reverse());
}
let a = [1,2,45,6,7];
daoArr(a);
/*BT9: Sắp xếp mảng tăng dần và giảm dần (Bubble Sort / Selection Sort).*/
function sapXep(b){
    tangDan=b.sort((x,y)=>x-y);
    console.log("Tăng dần: ",tangDan);
    console.log("Giảm dần: ",tangDan.reverse());
}
let b = [14,5,34,4,3,7,9,1,8,0];
sapXep(b);
/*BT10: Xóa tất cả các phần tử có giá trị x khỏi mảng.*/
function xoaPT(c,x){
    let mang = [];
    for(let i = 0; i<c.length; i++){
        if(c[i]!==x){
            mang.push(c[i]);
        }
    }
    console.log("Mảng BT 10: ",c);
    console.log("Mảng sau xóa: ",mang);
}
let c = [1,2,4,6,7,2,2,23,4,5,2,7];
xoaPT(c,2);
/*BT11: Gộp 2 mảng lại thành một mảng chung.*/
function gopMang (d,e){
    let mang = new Array();
    for(let i = 0; i<d.length; i++){
        mang.push(d[i]);
    }
    for(let j = 0; j<e.length; j++){
        mang.push(e[j]);
    }
    console.log("Mảng sau gộp: ",mang);
}
let d = [1,2,3,4];
let e = [5,6,7];
gopMang(d,e);
/*BT12: Loại bỏ phần tử trùng lặp, chỉ giữ lại giá trị duy nhất.*/
function loaiBoPT(g){
    let mang = new Array();
    for(let i = 0; i<g.length; i++){
        if(!mang.includes(g[i])){
            mang.push(g[i]);
        }
    }
    console.log("Mảng chưa bỏ: ",g);
    console.log("Mảng sau loại bỏ trùng lặp: ",mang);
}
let g = [12,34,5,6,3,5];
loaiBoPT(g);
/*BT13: Tính tổng các phần tử nằm ở vị trí chẵn và vị trí lẻ.*/
function tinhVT(h){
    let mang1 = [];
    let mang2 = [];
    let tongChan = 0;
    let tongLe= 0;
    for(let i =0; i<h.length;i++){
        if(h[i]%2===0){
            mang1.push(h[i]);
            tongChan +=h[i];
        }else{
            mang2.push(h[i]);
            tongLe+=h[i];
        }
    }
    console.log("Mảng bài 13: ",h);
    console.log("Tổng chẵn: ",tongChan);
    console.log("Tổng lẻ: ",tongLe);
}
let h = [2,3,4,5,6,1,7];
tinhVT(h);
/*BT14 : Kiểm tra mảng có đối xứng hay không?*/
function kiemTraDoiXung(arr){
    let n = arr.length;
    for(let i = 0; i < n/2; i++){
        if(arr[i] !== arr[n - 1 - i]){
            console.log("Mảng không đối xứng");
            return;
        }
    }
    console.log("Mảng đối xứng");
}

let a1 = [1, 2, 3, 2, 1];
let a2 = [1, 3, 3, 2, 1];
