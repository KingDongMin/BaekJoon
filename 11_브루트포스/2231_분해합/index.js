const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/**
  [ 2231 - 분해합 ]
  - 자연수 N이 주어진다. ( 1 <= N <= 1,000,000)
  - 주어진 문제는 N의 가장 작은 생성자를 구하는 것이다.
  - 생성자란 어떤 수의 분해합이 N과 같은 수를 말한다.
  - 분해합이란 N + (N의 각 자릿수 합) 이다.
    예 ) 123 => 123 + 1 + 2 + 3 = 129 ( 123의 분해합은 129이다. )
  - 즉, 123의 분해합은 129이므로 123은 129의 생성자이다.
  - 입력된 N의 최소 생성자를 출력하시오. ( 단, 생성자가 없는 경우에는 0을 출력한다.)

  [ 사고 과정 ]
  - 브루트포스 알고리즘은 완전탐색으로 모든 경우의 수를 구한다.
  - 자연수 N의 생성자를 판별하기 위해선 1부터 N까지 모든 자연수의 분해합을 구하여야 한다.
  - 위 문제는 O(n) 시간복잡도를 가지며 생성자를 찾기 위해 입력된 수 만큼 연산을 한다.
  - 하지만, N의 수가 클 수록 비효율적인 연산 횟수를 가진다.
  - 조금 더 효율적인 연산을 위해 분배합의 패턴을 찾는다.
  - N의 최소 생성자를 찾기 위해선 생성자가 될 수 있는 최소값 1부터 시작한다.
  - 
  - 분해합의 모든 경우의 수를 찾기 위해 N에서 -1씩 감소하여 분해합을 구해보았다.
  - 이때 보이는 패턴은 분해합은 

 */
 
// 분해합 함수
function decompositionSum(number){
  // 매개변수 number의 각 자릿수에 해당하는 수를 배열로 분해하여 총 합을 구한 후 최종적으로 number와 합산 
  return `${number}`.split('').map(el=>+el).reduce((acc,cur)=>acc+cur) + number
}

const N = input[0] // 입력값

// 분해합이 될 수 있는 최저값?
const min = Number(N) - N.length * 9 // 최소값
console.log(min)

// 분해합이 시작되는 최대값
const max = Number(N) + (9-Number(N[N.length-1])) 

// 기준 분해합
let start = max;

// 생성자 배열
let constructors = [0];

// 최소값까지 반복
while(1){
  console.log(start)
  // 분해합과 입력값 N의 동일한 홀수, 짝수 판별 -> 분해합과 입력값이 동일한 홀수or짝수일 경우 true
  if(!(decompositionSum(start) % 2 === 0 ^ Number(N) % 2 === 0 )){

    // 최대값의 분해합 범위에서 -2씩 감소하여 N이 되는 수 구하기
    let test = start - (decompositionSum(start) - N ) / 2
    decompositionSum(test) === Number(N) && constructors.push(test)
  }
  
  // 최대값을 -10씩 줄이기
  start-=10

  // 최대값이 최소값보다 작을 경우 반복을 멈춤 또한 최대값이 0보다 작은경우도 포함

  // if(N >= decompositionSum(start) && N >= start){
  //   console.log(`멈춤 : `+start)
  //   console.log(decompositionSum(start)-18)
  //   break;
  // }
  if(min >= start || start < 0){
    console.log(`멈춤 : `+start)
  console.log(decompositionSum(start)-18)
    break;
  }
}

console.log(constructors)
// 결과 출력
console.log(constructors.at(-1)) // 맨끝 배열
  
  
  
  
  
  
  
  
  
  

