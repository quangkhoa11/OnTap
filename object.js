//hash map là cấu trúc dữ liệu ánh xạ (key: 'value')
//không có hashmap thuần như java mà có 2 cấu trúc tương đương
//object = {} dùng để lưu key và value

var doiTuong = {
    name: 'Khoa',
    age: 22,
    address: 'HCM, VietNam',
    getAddr: function(){
        return this.address;
    }
};
console.log(doiTuong);

//Ví dụ muốn thêm key - value vào object có 2 cách:
doiTuong.email = ['khoa@gmail.com']; //Cách 1
doiTuong['sdt'] = '0123456789'; //cách 2

//cách lấy từng key
console.log(doiTuong.name); //cách 1
console.log(doiTuong['age']); //cách 2
console.log(doiTuong.getAddr());
