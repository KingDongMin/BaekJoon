const fs = require('fs');

const input = fs.readFileSync("example_input.txt").toString().split('\n')

/** 빠른 A + B 결과값 출력
 * 반복문을 사용할때 수많은 입력과 출력을 한다면 느려질 수 있다.
 * 그러니 입출력 방식을 1개로 통일하면 된다.
 * 즉, 여러 입력 값은 하나로 처리하고 출력 또한 하나로 처리한다.
 */

const num = Number(input[0]);
let result = '';
for(let i = 1 ; i <= num ; i++){
    let aa = input[i].split(' ');
    result += Number(aa[0]) + Number(aa[1]) + '\n' 
}
console.log(result) // 결과를 한번에 출력