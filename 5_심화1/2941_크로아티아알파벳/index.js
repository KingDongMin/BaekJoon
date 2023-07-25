const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')


/** [ 2941 - 크로아티아 알파벳 ]
 * 주어진 입력값에서 크로아티아 알파벳이 몇개가 들었는지 출력한다. 
  */
const word = input[0]

// 정규 표현식과 matchAll 활용
// 크로아티아 문자를 먼저 파싱한 후 ( | : or 연산 )
// 나머지 문자는 [그룹] 연산으로 처리한다.
let regexp = /c=|c-|dz=|d-|lj|nj|s=|z=|[A-Z]/gi;
const result = [...word.matchAll(regexp)]

console.log(result.length)

/** [ 학습 개념 ]
 * - 특정 문자를 파싱하기 위해 정규표현식을 사용한다.
 * - 정규표현식은 / /안에 파싱할 문자가 입력된다.
 * - mathAll은 문자열 메소드로 문자열안에 정규표현식에 해당하는 모든 결과값을 iterable로 출력한다.
 * - iteralbe객체를 spread로 전개할 경우 iteralbe이 null이 되었다.
 */



