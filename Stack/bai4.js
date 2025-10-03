/*3. Trung bình – Chuyển số thập phân sang nhị phân
Input: 10 → Output: 1010
Input: 25 → Output: 11001
Gợi ý: Lấy phần dư khi chia 2, push vào stack, sau đó pop ra để được số nhị phân.*/
function nhiPhan(n) {
    let stack = [];
    while (n > 0) {
        stack.push(n % 2);
        n = Math.floor(n / 2);
    }
    let binary = "";
    while (stack.length > 0) {
        binary += stack.pop();
    }
    return binary;
}

console.log(nhiPhan(10)); 
console.log(nhiPhan(25)); 
