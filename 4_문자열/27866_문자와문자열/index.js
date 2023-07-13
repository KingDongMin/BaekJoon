const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 27866 - 문자와 문자열]
 * 문자를 입력받고 문자열의 특정 위치를 읽기
 * 단어 S와 정수 i가 주어지면 S의 i번째 글자 출력
 */

const word = input[0];
const idx = Number(input[1]);

// 문자열은 배열임을 의미
console.log(word[idx-1])