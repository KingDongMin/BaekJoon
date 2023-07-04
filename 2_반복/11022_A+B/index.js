const fs = require('fs');

const input = fs.readFileSync("example_input.txt").toString().split('\n')

/** A + B - 8
 * 
*/
const num = Number(input[0]);
let result = '';
for(let i = 1 ; i <= num ; i++){
    let aa = input[i].split(' ');
    result += `Case #${i}: ${Number(aa[0])} + ${Number(aa[1])} = ${Number(aa[0]) + Number(aa[1])}\n` 
    
}
console.log(result) // 결과를 한번에 출력