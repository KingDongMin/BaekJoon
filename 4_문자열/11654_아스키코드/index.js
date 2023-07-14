const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 11654 - 아스키 코드 ]
 * 데이터는 결국 0과 1이지만 어떻게 문자로 만들어 질까?
 * 입력된 문자를 아스키코드로 출력하기
 */

const character = input[0];
console.log(character.charCodeAt());

// {string}.charCodeAt() : js에서 문자열을 아스키코드로 변환하는 메소드

// String.fromCharCode({number}) : js에서 아스키코드(숫자)를 문자열로 변환하는 메소드
console.log(String.fromCharCode(65))