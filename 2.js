function cek_kata (kata) {
    let split = kata.split(' ')
    let jumlahkata = split.length;
    let nonAngka = [];
    for(i = 0; i < split.length; i ++) {
        if(/[0-9]/.test(split[i]) === false) {
            nonAngka.push(split[i])
        }
    }
    let jumlahNonAngka = nonAngka.length;
    return jumlahNonAngka + '/' + jumlahkata
    
    }
    console.log(cek_kata('ini adalah sebuah kata'));
    console.log(cek_kata('2 pasang sandal hilang'))
