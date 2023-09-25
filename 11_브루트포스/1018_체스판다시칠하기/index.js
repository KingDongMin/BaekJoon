const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/**
  [ 1018 - 체스판 다시 칠하기 ]
  - 주어진 M * N의 보드에서 8 * 8 체스 판으로 사용하기 위한 부분을 자르며 보드를 체스판으로 쓰기 위해 몇 개의 보드를 다시 칠해야 하는지 출력하시오.

  [ 사고 과정 ]
  1. 브루트 포스로 보드에서 체스 보드가 될 수 있는 범위의 패턴을 판별한다.
  2. 보드 조각의 패턴을 모두 조회하기 위해 M * N의 보드를 이중 배열로 만든다.
  3. 보드에서 8 * 8 체스보드가 될 수 있는 부분은 보드의 M - 8 과 N - 8 까지이다.
  4. 보드의 M-8 * N-8 까지 범위는 8 * 8 체스보드를 자를 수 있는 시작점이다.
  5. 체스 보드의 시작점이 되는 조각의 인덱스를 배열로 만든다.
  6. 시작점으로 부터 8 * 8 범위까지 보드의 모든 조각을 조회한다.
  7. 시작점의 패턴은 'B'또는 'W'로 시작하며, 첫 조각이 두 패턴일 경우 체스판이 되기 위한 패턴을 판별한다.
  8. 보드의 시작점으로 부터 8 * 8 범위 까지 모든 조각을 조회하며 체스판 패턴과 다른 경우 카운트를 증가한다.
  9. 카운트는 보드가 체스판이 되기 위해 바뀌어야 하는 부분이다.
  10. 바뀌어야 하는 부분의 카운트를 배열로 담고 그 중에서 최소값을 출력한다.
 */

// 입력값
const [M, N] = input[0].split(' ')
const bord = input.filter((cur,idx)=> idx != 0).map(el=>el.split('')) // 보드를 이중배열로 치환

let [y, x] = [M-8, N-8] // M-8 * N-8 범위는 체스판을 8 * 8로 자를 수 있는 시작점이다.
//즉, 보드의 M-8 * N-8 범위의 각 조각들을 중점으로 8 * 8 체스판을 만들 수 있다.

const arr = []; // M-8 * N-8 범위를 배열로 치환한다.
for(let yy = 0 ; yy <= y ; yy++){
  for(let xx = 0 ; xx <= x ; xx++){
    arr.push([yy,xx])
  }
}

// 범위에서 각 조각의 패턴을 판별하기 위한 변수들
// 패턴은 체스판의 패턴이다.
let pattern;
let count = 0;
let result = [];
let pattern2;
let count2 = 0;

// 시작점 배열을 중점으로 보드에서 8*8범위를 자른다.
for([startY,startX] of arr){
  // 첫 조각이 'B'인 경우와 'W'인 경우를 담는다.
  pattern = bord[startY][startX]
  pattern2 = bord[startY][startX] === 'B' ? 'W' : 'B';

  // 보드에서 8 * 8 범위로 자른 조각들을 모두 조회한다.
  for(let i = startY ; i < startY+8 ; i++){
    for(let j = startX ; j < startX+8 ; j++){

      // 체스판이 되기 위한 패턴과 맞지 않는 경우 카운트를 증가한다.
      if(pattern !== bord[i][j]) count++;
      if(pattern2 !== bord[i][j]) count2++;

      // 체스판이 되기 위한 패턴으로 패턴 치환 : 'BWBW ... ' or 'WBWB...'
      pattern === 'B' ? (pattern = 'W') : ( pattern = 'B');
      pattern2 === 'B' ? (pattern2 = 'W') : ( pattern2 = 'B');
    }
    // 다음 줄의 첫 조각의 체스 패턴
    pattern === 'B' ? (pattern = 'W') : ( pattern = 'B');
    pattern2 === 'B' ? (pattern2 = 'W') : ( pattern2 = 'B');

  }
  // 해당 8 * 8 범위에서 체스판과 다른 조각들의 갯수를 배열에 삽입
  result.push(count);
  result.push(count2);

  // 카운트 초기화
  count2=0;
  count = 0;
}

// 배열에서 최소값을 찾아 출력
console.log(Math.min(...result))






