const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 1152 - 단어의 개수 ]
 * 각 단어의 개수를 세는 문제
 * 문자열을 구성하는 단어의 갯수 세기
 * 
 */

const arr = input[0].trim().split(' ')
console.log(arr[0] == '' ? 0 : arr.length);

// 단어 없이 공백만 있는 경우에도 1 값이 출력되는 오류가 있다.
// 이것을 해결하기 위해 공백에 대한 유효성 처리를 해줘야 한다.

// 비교적 간단한 문제이지만 어떠한 문제를 해결하기 위해서 예외를 일으키는 테스트 케이스 값(null,오류) 증명해 보아야 한다. 