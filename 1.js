function triangle(num) {
    if(typeof(num) === 'string') {
        console.log( 'Paramemeter harus angka dan positif!')
    }
    for(i = 0; i < num; i++) {
        let hasil = '';
        for(j = 0; j <= i; j++) {
            hasil += '#';
        }
       console.log(hasil)
        } 
    }
    triangle(1)
    triangle(5)
    triangle('tiga')