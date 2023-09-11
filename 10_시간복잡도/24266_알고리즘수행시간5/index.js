const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/**
  [ 24266 - 알고리즘의 수행 시간 5 ]
  - 주어진 ManOfPassion 알고리즘의 수행 횟수와 최고차항의 차수를 출력하시오.

  [ 사고 과정 ]
  - 알고리즘을 분석한 결과 삼중 for문으로 수행 횟수는 n^3번이다.
  - 시간복잡도 또한 n^3이며 최고차항의 차수는 3이다.

  [ 리뷰 ]
  - 계산식은 맞지만 제출 시 틀렸다고 판정이 되었다.
  - 그 이유는 주어진 입력값의 범위가 1부터 500,000이며 500,000의 n^3은 125,000,000,000,000,000이다.
  - JS에서 표현할 수 있는 숫자의 범위는 +-(9,007,199,254,740,991)까지이다.
  - 즉, 큰 숫자를 표현할 수 없어 틀린 것이다.
  - JS에서 큰 숫자를 사용하기 위해선 Number대신 BigInt를 사용해야 한다.
  - BigInt는 숫자 뒤애 n을 붙여도 되고 BigInt생성자를 이용해도 된다. ( 10000n or BigInt(10000) )
  - 주의할 점은 Number타입과 BigInt타입을 혼합하여 연산할 수 없다. 즉, 타입이 다르기 때문이다.
  - BigInt를 연산할땐 모든 숫자를 BigInt로 치환하여 타입을 동일하게 맞춰야 한다.
  - 또한 BigInt는 1000n처럼 맨 뒤에 n이 붙으므로 n을 없애기 위해선 문자열로 치환한다.

*/

const number = BigInt(input[0])
console.log(`${number**BigInt(3)}`);
console.log('3')

// BigInt
console.log(typeof number) // 타입은 BigInt
//console.log(number ** 3) // number는 BigInt타입이고 3은 Number타입이라서 ** 거듭제곱 연산자를 사용할 수 없다 - TypeError
console.log(number) // BigInt를 출력 시 맨 마지막 끝에 100...n이 붙는다.

