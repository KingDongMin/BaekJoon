const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/**
  [ 24265 - 알고리즘의 수행 시간 4 ]
  - 주어진 ManOfPassion 알고리즘의 수행 횟수와 수행 횟수를 다항식으로 나타내었을때 최고 차항의 차수를 출력하시오.

  [ 사고 과정 ]
  - 알고리즘을 분석한 결과 "0.5n^2 - 0.5n"의 다항식이 도출되었다.
  - 알고리즘은 입력 n에 대해서 외부 for문에선 n번 반복하며 내부 for문은 각 n-1부터 1까지 반복한다.
  - 이로서 내부 for문의 각 횟수를 더한 값이 알고리즘의 수행 횟수가 된다.
  - n-1부터 1까지의 합은 가우스 덧셈 공식을 이용하였다.
  - 가우스 덧셈 공식 : a부터 b까지의 덧셈 : (a+b) * (b-a+1) * 1/2
  - 결론적으로 다항식의 최고 차항의 차수는 계수와 상관없이 2이다.

  [ 리뷰 ]
  - 수행 횟수를 다항식으로 변환하는 과정이 번거로웠다.
  - 하지만 내가 짠 코드의 수행 횟수를 다항식으로 변환할 수 있다면 시간 복잡도를 통해 효율적인 코드임을 판별할 수 있다.
 */


const n = Number(input[0]);
console.log(0.5*n**2 - 0.5*n)
console.log()