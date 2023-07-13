const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 2743 - 단어 길이 재기 ]
 */

const word = input[0];

// 문자열은 배열 -> 배열을 취급하듯 사용
// 각 인덱스에는 단어가 들어가 있다.
console.log(word.length);
