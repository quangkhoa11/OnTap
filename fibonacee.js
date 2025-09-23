//Dùng for
function fibonacci(n){
    let soDau = 0;
    let soHai = 1;

    if(n===soDau){
        return soDau;
    }
    if(n===soHai){
        return soHai;
    }

    let i;
    let cong;
    for(i=2;i<=n;i++){
        cong= soDau + soHai;
       soDau=soHai;
       soHai=cong;
    }
    return soHai;
}
console.log("Kết quả phân tử 9: ",fibonacci(9))

//Dùng đệ quy
function fibonacciDQ(num){
    let a = 0;
    let b = 1;
    if(num===0){
        return a;
    }
    if(num===1){
        return b;
    }
    if(num>=2){
        return fibonacciDQ(num - 1) + fibonacciDQ(num - 2);
    }
}
console.log(fibonacciDQ(9));
    
    //đếm countdown
// Dùng for

   function demNguoc2(dem){
        for(let i = dem; i>0; i--){
           console.log(i);
        }
    }
    demNguoc2(10);

//đệ quy
    function demNguoc(dem){
        if(dem>0){
            console.log(dem);
            return demNguoc(dem-1);
        }return dem;

    }

    demNguoc(10);

/*Tính lũy thừa
Tính giá trị của x mũ n (x^n) với n là số nguyên không âm.
Định nghĩa toán học:
    x^0 = 1 (Trường hợp cơ sở)
    x^n = x * x^(n-1) với n > 0 (Bước đệ quy)
 */

//Cách 1 
 function luyThua2(x1,n1){
        let tinh;
        if(n1===0) return 1;
        tinh = Math.pow(x1,n1);
        return tinh;
    }
    console.log("Lũy thừa của 2 mũ 7 là: ",luyThua2(2,7));
//Cách 2 đệ quy
    function luyThua(x,n){
        if(n===0) return 1;
        if(n>0){
            return x * luyThua(x,(n-1));
        }
        return n;
    }
    console.log("Lũy thừa của 2 mũ 2 là: ",luyThua(2,2));


/*Bài tập tính giai thừa
Bài toán tính giai thừa của một số nguyên dương n (ký hiệu n!). Định nghĩa toán học của giai thừa là:
    0! = 1 (Trường hợp cơ sở)
    n! = n * (n-1)! với n > 0 (Bước đệ quy)
*/
//Cách 1 for
function giaiThua2(n){ //5
    let a = 1;
    if(n===0) return a;
    for(let i =1; i<=n; i++){
        a = a * i;
    }
    return a;
    }
console.log("Kết quả: ",giaiThua2(5));

//Cách 2 đệ quy
function tinhGiaiThua(n){
    if(n===0){
        return 1;
    }
    if(n>0){
        return n * tinhGiaiThua(n - 1);
    }
    return n;
}
console.log("Giai thừa của 5 là: ", tinhGiaiThua(5));
