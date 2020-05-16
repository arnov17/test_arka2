function hollowTriangle (limit) {
if (limit % 2 == 0) {
    console.log('Parameter harus angka ganjil')
} else {
    for (var i = 0; i < (limit) - 1; i++) {
        var temp = ' '
        for (var j = 0; j < (limit * 2) - 3; j++) {
          if (i - j === 0) {
              temp += 'o'
          }
          else if (i + j === (limit * 2) - 4) {
              temp += 'o'
          }
          else if (i === 0) {
              temp += 'o'
          }
          else if (j === 0 ) {
              temp += ' '
          }
          else if (j === (limit * 2) - 4 ){
              temp += ' '
          }
          else if (i === limit - 2) {
              temp += ' '
          }
          else if (i + j === (limit * 2) - 3 
          || i + j === (limit * 2) - 2 
          || i + j === (limit * 2) - 1 
          || i + j === limit * 2
          || i + j === (limit * 2) + 1
          || i + j === (limit * 2) + 2
          || i + j === (limit * 2) + 3 ) { 
              temp += ' '
          }
          else if (i - j === 1
          || i - j === 2
          || i - j === 3 
          || i - j === 4
          || i - j === 5
          || i - j === 6
          || i - j === 7) {
              temp += ' '
          }
          else {temp += 'x' }
        }
        console.log(temp)
      }
    }
}
hollowTriangle(11)
hollowTriangle(12)