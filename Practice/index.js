const fs = require('fs');

const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** 여러 입력 케이스 출력
 * 어떤 오류??? 왜 틀림?
 * 0 0 이 들어 올때까지 ?
 * !! trim()을 이용하여 양끝 공백을 제거해야함 
 * -> 입력값 에러?
*/
let result = '';
for(let i = 0 ; i < input.length-1 ; i++){
    const nums = input[i].split(' ')
    result += Number(nums[0]) + Number(nums[1]) + '\n'
}
console.log(result);