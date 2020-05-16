function findDuplicate (kalimat) {
if(kalimat == undefined || kalimat.length == 0 || typeof(kalimat) !== 'string') {
    console.log('Harus memasukan parameter dan harus string!')
} else {
    let array = []
    for(i = 0; i < kalimat.length; i++) {
        if(kalimat[i]!== ' ') {
            array.push(kalimat[i])
        }
    }
    let object = {};
    array.forEach(function (item) {
    if(!object[item])
        object[item] = 0;
        object[item] += 1;
     })
    //  console.log(object)
    let hasil = ''
    for (var key in object) {
    if(object[key] > 1) {
        hasil += `${key} : ${object[key]}\n`
      }
    }
    if(hasil.length == 0) {
        console.log('Tidak ada karakter yang berulang!')
    } else {
        console.log(hasil)
    }
  }
}
// findDuplicate('hari apa saja saya bisa!')
// findDuplicate('cepat kerjakan!!!')
// findDuplicate('adobe')
// findDuplicate()