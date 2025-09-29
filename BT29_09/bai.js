/*1. Viết hàm nhận vào một mảng số nguyên, trả về phần tử xuất hiện nhiều lần nhất
trong mảng. Nếu có nhiều phần tử cùng số lần, trả về mảng các phần tử đó.
VD: mostFrequent([1,2,2,3,3,4,5,3,2]) => Kết quả [2,3]*/
function mostFrequent(arr){
    let freq = {};       
    let demFre = 0;     
    let kq = [];    

    for(let so of arr){
        if(freq[so]){        
            freq[so]++;
        } else {             
            freq[so] = 1;
        }
        if(freq[so] > demFre){   
            demFre = freq[so];
        }
    }

    for(let so in freq){
        if(freq[so] === demFre){
            kq.push(so); 
        }
    }

    return kq;
}
let arr = [1,2,2,3,3,4,5,3,2];
console.log(mostFrequent(arr));
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
/*3. Cho một mảng các chuỗi, hãy nhóm chúng theo độ dài và trả về một Map, trong
đó Key là độ dài, value là danh sách chuỗi có cùng độ dài.
VD: fn(["one","two","three","four","six"]);
Kết quả: Map{
3 => ['one','two','six'],
5 => ['three'],
4 => ['four']
}*/
function fn1(mang){
    let map = new Map();
    for(chuoi of mang){
        let doDai = chuoi.length;
        if(!map.has(doDai)){
            map.set(doDai, []);
        }
        map.get(doDai).push(chuoi);
    }
    for(let [key, value] of map){
        console.log(key, "=>", value);
    }
    return map;
}

let mang = ["one","two","three","four","six"];
fn1(mang);

/*4. Viết phương thức reverse() để đảo ngược một LinkedList.
VD: const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); //1->2->3
list.reverse();
list.print(); //3->2->1
*/
