const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/**
  [ 2231 - 분해합 ]
  - 입력값 N의 최소 생성자를 출력하여라.
  - "생성자"란 어떤 수의 분해합과 어떤 자연수가 값이 같은 경우이다.
    ( 198의 분해합은 216이므로 198은 216의 생성자이다. )
  - "분해합"이란 자연수 K일때 "K + (K의 각 자릿수 총 합)"이다.
  - 생성자는 여러개 존재하거나 혹은 존재하지 않을 수 있다.
  - 생성자가 존재하지 않을 경우 0을 출력한다.


	1. 입력값
	2. N의 생성자가 될 수 있는 최소 값
	3. 결과가 담길 배열
	4. 생성자 최소 시작점부터 증가하며 분해합 연산 ( 생성자 도출 후 break )
	5. 결과 출력 ( 생성자가 없는 경우 0을 출력 )

*/

// 분해합 함수
function Sum(number){
  return `${number}`.split('').map(el=>+el).reduce((acc,cur)=>acc+cur) + number
}

const N = Number(input[0]); // 1.
const min = N < 10 ? 1 : N - (`${N}`.length * 9) // 2.
const result = [0] // 3.

// 4.
for(let i = min ; i <= N ; i++){
  if(Sum(i) === N){
    result.push(i)
    break;
  }
}

// 5.
console.log(result.at(-1))