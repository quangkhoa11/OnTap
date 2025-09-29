/*2. Cho 2 mảng số nguyên, hãy trả về một mảng chứa các phần tử chung của cả hai
(Không trùng lăp).
VD: fn([1,2,3,4], [3,4,5,6]) = Kết quả: [3,4]*/
function fn(arr1, arr2){
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let ketqua = [...set1].filter(x=>set2.has(x));
    console.log(ketqua);
}
let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];
fn(arr1,arr2)