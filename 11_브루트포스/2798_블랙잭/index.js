const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/**
  브루트 포스 : 모든 경우의 수를 검사하는 알고리즘

  [ 2798 - 블랙잭 ]
  - 블랙잭은 카드의 합이 21이 넘지 않는 한도 내에서 카드의 합을 최대한 크게 만드는 게임이다.
  - 이 문제에선 변형된 블랙잭 게임을 다룬다.
  - N개의 카드가 주어질때 N개의 카드 중 3장을 골라 M에 최대한 가까운 카드의 합을 구한다.

  [ 사고 과정 ]
  - N장의 카드에서 3장의 카드를 뽑는 모든 경우의 수를 구하기 위해 삼중 for문을 이용하였다.
  - for문의 순서에 따라 첫번째, 두번째, 세번째 카드를 의미한다.
  - 두번째 for문 부터는 이전에 고른 숫자를 제외한 배열을 사용하였다.

  [ 리뷰 ]
  - 브루트 포스에 관한 알고리즘으로 모든 경우의 수를 통해 결과를 도출하여야 한다.
  - 본인은 삼중 for문으로 결과를 도출하였다. (모든 경우의 수는 아니다.)
  - 카드의 모든 경우의 수는 조합 계산식으로 n! / (n-r)! * r! 이다.
  - 조합으로 경우의 수를 구하였을때 비교적 작은 경우의 수가 나왔지만 알고리즘으로 조합을 구현한다는 건 쉽지 않았다.
  - 이후 경우의 수에 관하여 결과를 도출하기 위해 조합을 조금 더 공부할 필요성을 느낀다.
 */

const [N, M] = input[0].split(' ').map(el=>+el)
const cards = input[1].split(' ').map(el=>+el)

let arr1 = cards
let result = 0;

for(let i of cards){
  arr1 = arr1.filter(el=> el != i)
  for(let j of arr1 ){
    let arr2 = arr1.filter(el => el != j)
    for(let k of arr2 ){
      if( (i+j+k) > M) continue
      result = M - (i + j + k) < M-result ? i+j+k : result; 
    }
  }
}

console.log(result)