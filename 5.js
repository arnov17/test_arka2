function cariPasangan (param) {
let object = {};
param.forEach(function (item) {
    if(!object[item]) 
    object[item] = 0
    object[item] += 1
 });
//  console.log(object)
let array = [];
for (var key in object) {
    if(object[key] > 1) {
        array.push(key)
    }
}
// console.log(array)
let jumlahPasang = array.length
let result = []
for(i = 0; i < array.length; i++) {
result.push([array[i], array[i]])
}
console.log(`${jumlahPasang} pasang :`)
console.log(result)
}
cariPasangan([5,13,7,5,9,20,9,5,14])

