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

