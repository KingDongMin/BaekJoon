const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 11720 - 숫자의 합]
 * 정수를 문자열로 입력받는 문제
 * 첫번째 줄 입력 : 문자열의 문자 수
 * 두번째 줄 입력 : 문자열
 */
const count = Number(input[0]);
const numbers = input[1];

// 배열의 총 합을 구하는 방법 : reduce
/** 
let rs = numbers.reduce((sum,el)=>{
    let num = Number(el)
    return sum+num
})
console.log(rs);
*/

// But!! 문자열은 배열로 취급되어져서 배열의 메소드인 reduce를 사용할 수 있을 줄 알았는데 안된다. -> 문자열 타입을 배열 타입으로 변환해야 한다.

/** " Array.from( { 배열 or 반복 가능 객체 }) "
 * - Array.from을 이용하면 문자열을 배열로 만들 수 있다.
 * - 문자열은 반복 가능한 객체다?
 */
const arr = Array.from(numbers);
const rs = arr.reduce((sum,el)=>{
    return Number(sum)+Number(el)
})
// 첫번째 매개변수 (sum)은 누적 값을 나타내는데 초기에 NaN값이 아닌 배열의 첫번째 인덱스 위치의 값을 가지고 있다.

console.log(rs)