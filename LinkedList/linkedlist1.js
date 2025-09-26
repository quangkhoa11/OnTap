/*Linked List*/
function Node(data){
    this.data = data;
    this.next = null;
}
/*Bài tập 1: Tạo một Linked List rỗng, thêm 5 số nguyên và in ra. */
let head = new Node(parseInt(prompt("Nhập phần tử thứ nhất: ")));
let current = head;
for(let i = 1; i<5;i++){
    let newNode = new Node(parseInt(prompt("Nhập phần tử thứ ", i+1)));
    current.next=newNode;
    current = newNode;
}

let r = head;
while(r){
    console.log(r.data);
    r = r.next;
}
/*Bài tập 2: Đếm số phần tử trong Linked List. */
let head2 = new Node(10);
head2.next = new Node(30);
head2.next.next = new Node(40);
let temp =head2;
let dem=0;
while(temp){
    dem++;  
    temp = temp.next;
} 
console.log(`Có ${dem} phần tử trong Linked List`);
/*Bài tập 3: Tìm giá trị lớn nhất và nhỏ nhất trong danh sách.*/
let head3 = new Node(10);
head3.next = new Node(20);
head3.next.next = new Node(30);

let run = head3;
let max = run.data;
let min = run.data;

while(run){
    if(run.data > max){
        max = run.data;
    }
    if(run.data < min){
        min = run.data;
    }
    run = run.next;
}

console.log("Giá trị lớn nhất:", max);
console.log("Giá trị nhỏ nhất:", min);
/*Bài tập 4: Thêm phần tử vào đầu danh sách*/
let head4 = new Node(10);
head4.next = new Node(20);
head4.next.next = new Node(30);

let newNode = new Node(5);   
newNode.next = head4;         
head4 = newNode;              

let run2 = head4;
while(run2){
    console.log(run2.data);
    run2 = run2.next;
}


/*Thêm phần tử vào vị trí bất kỳ (ví dụ: sau node thứ 3).

Xóa phần tử theo giá trị cho trước.

Đảo ngược Linked List (ví dụ: 10 → 20 → 30 thành 30 → 20 → 10). */