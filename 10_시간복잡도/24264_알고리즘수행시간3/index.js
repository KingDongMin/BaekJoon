const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/**
   [ 24264 - 알고리즘의 수행 시간 3 ]
   - 주어진 ManOfPassion 알고리즘의 수행 횟수와 수행 횟수를 다항식으로 나타낼 때 최고 차항의 차수를 출력하시오.

   [ 사고 과정 ]
   - 주어진 알고리즘은 이중 for문으로 이루어져 있다.
   - 입력값 n이 주어졌을 때 n번 만큼 for문을 반복하며 이중 for문이기에 n^2의 수행 횟수를 거친다.
   - 다항식은 n^2이므로 최고차항은 2이다.
 */

console.log(Number(input[0])**2)
console.log(2)
