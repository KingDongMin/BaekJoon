const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 1157-단어 공부 ]
 * 대소문자로 이루어진 단어에서 가장 많이 사용된 알파벳을 대문자로 출력하기
 * 단, 많이 사용된 알파벳이 하나가 아닌 여러개일땐 ?를 출력하기.
 */

const word = input[0].toLocaleUpperCase() // 입력값 대문자 치환
const map = new Map(); // Map생성

// 알파벳 갯수 세기
for(el of word){
    map.set(el, map.get(el) === undefined ? 1 : map.get(el)+1)
}

let max = Math.max(...map.values()); // 중복된 알파벳 최대값
let rs = ''; // 결과 값

// 알파벳 최대값 key 구하기
map.forEach((v, k)=>{
    if(max == v){
        rs += k;
    }
})

// 최대값 알파벳이 2개일 경우 ? 출력
console.log(rs.length > 1 ? "?" : rs );

/** [ 후기 ] 
 * 
 * 처음엔 아스키코드를 이용해 소문자를 대문자로 치환하려고 했다.
 * 하지만 대문자로 치환하는 연산 자체를 줄이기 위해 String.localUpperCase()를 사용해 입력값을 모두 대문자로 치환하였다.
 * 
 * 문제 풀이 흐름은 Map객체를 이용하여 각 알파벳을 카운트하고 Math.max()와 Map.value()를 이용하여 자주쓰인 알파벳의 최대값을 구한다.
 * 그런 후 최대값에 해당하는 key를 출력하면 되는데 이때, 최대값이 하나 이상일 경우 rs에 알파벳을 더하여 최대값이 여러개인 알파벳을 처리하였다.
 * rs의 length가 1이상일 경우는 자주 쓰이는 알파벳이 여러개임을 뜻하므로 ?문자를 출력한다.
 * 
 * 
 */
// 아스키 코드 값 알아내기 : String.charCodeAt()
// 문자를 대문자로 치환하기 : String.localeUpperCase()



