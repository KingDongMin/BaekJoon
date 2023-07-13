const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 9086 -  문자열 ]
 * 문자열의 첫글자와 마지막 글자 출력하기
 */

const test_num = Number(input[0]);

for(let i = 1 ; i <= test_num ; i++){
    let word = input[i].trim();
    console.log(`${word[0]}${word[word.length-1]}`)
}