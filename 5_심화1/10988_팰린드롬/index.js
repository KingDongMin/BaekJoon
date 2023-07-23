const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')


/** [ 10988 - 팰린드롬 ]
 * 입력 값이 팰린드롬인지 확인하기
 * 팰린드롬 : 거꾸로해도 똑같은 단어
 */

const word1 = input[0]
// const word2 = word1.reverse();
// reverse 함수는 원본까지 바꾼다.

const word2 = [...word1].reverse();

let rs = 1
// for in하고 of 차이 아직 모르게씀
// for in은 객체에
// for of는 배열에 주로 사용
for( idx in word1){
    if(word1[idx] !== word2[idx])
    {
        rs = 0;
        break;
    }

}


console.log(rs);

// 다른 풀이
// 기존 문자와 역 문자를 비교연산자를 통해서도 확인이 가능하다.
const aa = 'level'
const bb = [...aa].reverse().join('')

console.log(`조건 연산자로도 비교 가능 / 결과 : ${aa == bb}`)


