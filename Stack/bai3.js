/*4. Trung bình – Đảo ngược mảng 
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1] */
function daoNguocMang(arr){
    let arrNew = [];
    let arrOld = [...arr];
    while(arr.length>0){
        arrNew.push(arr.pop());
    }
    console.log(arrOld)
    console.log(arrNew);

}
daoNguocMang([1,2,3,4,5,6]);
