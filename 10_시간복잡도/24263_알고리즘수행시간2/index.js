const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/**
   [ 24263 - 알고리즘의 수행 시간 2 ]
   - 주어진 ManOfPassion 알고리즘의 수행 횟수와 최고차항의 차수를 출력하시오.

   [ 사고 과정 ]
   - 주어진 알고리즘은 입력값 n에 따라 n번 반복한다.
   - 수행 횟수는 입력값 만큼이며 수행 횟수를 다항식으로 표현했을 경우 n이기에 차수는 1이다.
*/

console.log(input[0])
console.log(1)

