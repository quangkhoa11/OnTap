//Dùng For
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
