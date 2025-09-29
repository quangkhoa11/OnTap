/*3. Cho một mảng các chuỗi, hãy nhóm chúng theo độ dài và trả về một Map, trong
đó Key là độ dài, value là danh sách chuỗi có cùng độ dài.
VD: fn(["one","two","three","four","six"]);
Kết quả: Map{
3 => ['one','two','six'],
5 => ['three'],
4 => ['four']
}*/
function fn(arr){
    let map = new Map();
    for(chuoi of arr){
        let doDai = chuoi.length;
        if(!map.has(doDai)){
            map.set(doDai, []);
        }
        map.get(doDai).push(chuoi);
    }
    for(let [key,value] of map){
        console.log(key, "=>", value);
    }
    return map;

}
fn(["one","two","three","four","six"])
