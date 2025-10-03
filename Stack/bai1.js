/*Bài 1: Đảo ngược chuỗi bằng Stack
Input: "hello"
Output: "olleh"
Gợi ý: Dùng push từng ký tự vào stack, sau đó pop ra để được chuỗi đảo ngược.*/
function daoNguocChuoi(str){
    let stack = [];
    for(let char of str){
        stack.push(char);
    }
    let reversed = "";
    while(stack.length > 0){
        reversed = reversed + stack.pop();
    }
    return reversed;
    
}
let a= "hello";
console.log(a);
console.log(daoNguocChuoi(a));