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