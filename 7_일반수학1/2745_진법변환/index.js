const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split(' ');

/** [ 2745 - 진법변환 ]
 * 
 * - 주어진 입력값은 B와 N이다.
 * - B진법에 해당하는 N값을 10진법으로 변환하여 출력하여라.
 */

// 진법 변환은 어떻게 하는가?
// 0 ~ N의 수만으로 숫자를 표현
// 각 자릿수는 N^0 부터 시작한다.

/** 구현 과정
 * 1. 입력 값 B와 N을 가져온다.
 * 2. N의 각 자릿수를 파싱한다.
 * 3. 각 자릿수에 B^index으로 계산한다.
 * 4. 모든 값을 더하여 출력한다.
 */


const number = input[0].split('').reverse();
// 아래 reduce시 idx는 거듭제곱으로 쓰이므로 첫번째 자릿수가 B^0부터 시작하도록 뒤집기


const arithmetic_B = Number(input[1]); // 진법B


const result = number.reduce((acc,value,idx)=>{
  
  // 변환 10진법 : isNaN()으로 A-Z를 판별 / 아스키코드를 참조하여 -55
  const conversion_10 = (isNaN(value) ? value.charCodeAt()-55 : Number(value))*(arithmetic_B**idx);
  
  return acc + conversion_10;
},0)

console.log(result)

// 문자열을 아스키코드로 변환 : "문자열".charCodeAt([문자열 자릿수]);
// 거듭 제곱 : N**n , 2**3 = 2^3 = 8
// isNaN() : is Not a Number 
// X -> number의 첫째 자릿수부터 비교를 하는데 거듭제곱이 0부터 시작 / 인덱스

// 다른 풀이 리뷰 : js의 기초 부분의 부족일까?

// parseInt(숫자N, 진법B) :진법B로 표현된 숫자N을 10진수로 변환
const num = parseInt(input[0], Number(input[1]))
console.log(`parseInt : ${num}`)