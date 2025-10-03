/*2. Dễ – Kiểm tra ngoặc đúng
Input: "({[]})" → true
Input: "({[)]}" → false
Gợi ý: Mỗi khi gặp dấu mở thì push, gặp dấu đóng thì pop và kiểm tra cặp */
function kiemTraNgoac(chuoi) {
  let stack = [];
  let capNgoac = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let kyTu of chuoi) {
    if (kyTu === '(' || kyTu === '[' || kyTu === '{') {
      stack.push(kyTu); 
    } else if (kyTu === ')' || kyTu === ']' || kyTu === '}') {
      if (stack.length === 0 || stack.pop() !== capNgoac[kyTu]) {
        return false; 
      }
    }
  }

  return stack.length === 0; 
}

console.log(kiemTraNgoac("({[]})"));  
console.log(kiemTraNgoac("({[)]}"));  
console.log(kiemTraNgoac("((()))"));  
console.log(kiemTraNgoac("(()"));     