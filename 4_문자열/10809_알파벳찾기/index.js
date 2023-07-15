const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')


/** [ 10809 - 알파벳 찾기 ]
 * - 알파벳의 수 만큼 배열이 주어진다. ( a,b,c... x, z까지의 크기를 가진 배열)
 * - 단어가 주어진다. (소문자로만 이루어진 단어)
 * - 주어진 단어를 이루고 있는 알파벳들이 단어에서 어느 위치(idx)에 있는지 알파벳 배열에 삽입한다. (예 :  단어S에서 a란 단어는 2번째에 위치한다.)
 *
  */

// 우선 알파벳 크기 만큼 배열을 만들어야 한다.
// 각 알파벳에 대한 값을 Map 객체를 이용하면 더 쉽다?
const map = new Map();
// Map 객체에서 값을 초기화시 좀더 간단히 하는 방법은 없을까?

// 아스키 코드에서 소문자는 a가 97로 시작하여 소문자 알파벳 마지막 z가 122로 끝난다.
for (let ascii = 97 ; ascii <= 122 ; ascii ++){
    map.set(String.fromCodePoint(ascii),-1)
}

console.log(map)

// 주어진 단어를 배열로 나누기

const word = Array.from(input[0])
console.log(word)

// 단어에서 해당 알파벳 인덱스 찾기
console.log(word.indexOf('a'))

// 각 단어의 인덱스를 찾아 map 객체에 삽입하기
for(let item of word){
    map.set(item,word.indexOf(item));
}

// 결과값에 공백을 추가하여 출력하기 위해 배열로 치환하여 공백 삽입 후 출력
const rs = [...map.values()]
console.log(rs.join(" "))