const fs = require('fs');

const input = fs.readFileSync("example_input.txt").toString().split('\n')

/** 여러 입력 케이스 출력
 * 어떤 오류??? 왜 틀림?
*/
let result = '';
for(let i = 0 ; i < input.length-1 ; i++){
    const nums = input[i].split(' ')
    result += Number(nums[0]) + Number(nums[1]) + '\n'
}
console.log(result);