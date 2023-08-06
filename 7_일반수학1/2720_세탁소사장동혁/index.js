const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 2720 - 세탁소 사장 동혁 ]
 * - 주어진 T개의 Cent에서 동전 갯수를 최소화하여 거스름돈 출력하기
 */


const count  = Number(input[0]) // 주어진 테스트 케이스 수 
// 거스름 동전 [ 쿼터 0.25, 다임 0.10, 니켈 0.05, 페니 0.01 ] 
const coins = [25, 10, 5, 1];

for(let i = 1 ; i <= count ; i++){
  // 각 테스트 케이스 : 센트
  let cent = Number(input[i])
  let result = [];

  // 각 거스름 동전 연산
  for(let j = 0 ; j < 4 ; j++){
    let change = parseInt(cent / coins[j])
    cent = cent % coins[j] 
    result.push(change)
  }
  console.log(result.join(' '))
  result = [];
}

/** [ 리뷰 ]
 * - Math.floor를 이용 == parseInt 
 * - for문 안에서 변수가 매번 생성되기에 전역변수로 사용해도 될듯
 */