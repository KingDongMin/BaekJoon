const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 27323 - 직사각형]
 * - 세로 A, 가로 B인 직사각형의 넓이를 출력하라. 
 */

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A*B)

// 이 문제는 블로깅하지 않음 -> 간단하기에..
