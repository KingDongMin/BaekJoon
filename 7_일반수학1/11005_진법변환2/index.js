const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split(' ');

/** [ 11005 - 진법변환2 ]
 * - 주어진 10진수 N을 B진법으로 변환
 */

// 입력값 초기화
const number = input[0];
const base = input[1];

let arr = [];
let num = Number(number);

// 해당 진법으로 변환
while(num != 0){
  arr.push(num%base);
  num = parseInt(num/base);
}

// 10이상인 경우 문자로 표현
let result = arr.map(el=>{
  if(el >= 10){
    // 10부터 문자A라고 칭할때 A는 아스키코드 65임
    return String.fromCharCode(el+55)
  }
  return el
}).reverse().join('')


console.log(result)

/** [ 리뷰 ]
 * - 다른 이들과 비슷함
 * - charCodeAt : 문자열에서 해당 문자를 아스키코드로 변환
 * - fromCharCode : 숫자를 아스키코드로 변환
 */