/*4. Viết phương thức reverse() để đảo ngược một LinkedList
list.append(1);
list.append(2);
list.append(3);
list.print(); //1->2->3
list.reverse();
list.print(); //3->2->1
*/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let hientai = this.head;
        while (hientai.next) {
            hientai = hientai.next;
        }
        hientai.next = newNode;
    }

    print() {
        let hientai = this.head;
        let kq = "";
        while (hientai) {
            kq = kq + hientai.data + (hientai.next ? " -> " : "");
            hientai = hientai.next;
        }
        console.log(kq);
    }

    reverse() {
        let truoc = null;
        let hientai = this.head; 
        let next = null;

        while (hientai) { 
            next = hientai.next;   
            hientai.next = truoc;   
            truoc = hientai;       
            hientai = next;      
        }

        this.head = truoc; 
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();   
list.reverse();
list.print();   

