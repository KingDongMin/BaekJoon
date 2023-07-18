const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split(' ')

/** [ 2908 - 상수 ]
 * 두개의 숫자를 거꾸로 읽어 큰 수 출력하기
 * 숫자는 세자리로 이루어져 있다.
 */

// 문자열을 어떻게 뒤집을 수 있을까??
// ! 문자열을 배열로 만들어 reverse메소드를 이용하여 쉽게 뒤집을 수 있다.

// 입력값 배열로 초기화
const num1 = [...input[0]];
const num2 = [...input[1]];

// 배열 뒤집기
num1.reverse();
num2.reverse();

// 다시 숫자로 조합 (배열->문자열->숫자)
const rev_num1 = Number(num1.reduce((sum,el)=>sum+el))
const rev_num2 = Number(num2.reduce((sum,el)=>sum+el))

// 결과값 연산
const result = rev_num1 > rev_num2 ? rev_num1 : rev_num2

console.log(result)

