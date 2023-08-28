const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');


 /** [ 9063 - 대지 ]
  * 
  * 1. 옥구슬의 위치를 참고하여 대지의 넓이를 구한다.
  * 2. 옥구슬의 위치를 2차원 정수 좌표로 주어진다.
  * 3. 단, 옥구슬은 같은 위치에 여러 개가 발견될 수 있다.
  * 
  */

 /** [ 사고 과정 ]
  * - 구슬이 2개 이상이며 x,y 좌표의 차가 분명할 때 대지의 넓이를 측정할 수 있다.
  */

 /** [ 풀이 과정]
  * 1. 옥구슬 입력값 가져오기
  * 2. 옥구슬 위치 배열에서 위치 구하기
  */

 // Q. 배열에서 특정 요소만 제거하고 가져오는 방법은?
// A. filter를 사용한다.

// 입력값에서 첫번째 요소는 옥구슬의 개수이므로 이를 제외하고 좌표 값을 배열로 만들어 이중배열을 만든다.
// 예상 : [ [ 2, 1 ], [ 3, 2 ], [ 5, 2 ], [ 3, 4 ] ]
let test = input.filter((v,idx)=>{
    if(idx !== 0)
    return v.split(' ')
})
console.log(test)
// 출력 : [ '2 1', '3 2', '5 2', '3 4' ]
// 결과 : 이중배열로 좌표 배열을 만드려고 했지만 split가 동작하지 않았다.
// 원인 : filter는 반환되는 값이 true와 false냐에 따라 결정된다.
// 해결 : 조건에 따라 새로운 배열을 만들기 위해선 filter를 이용해야 하지만 반환값이 추가 연산한 값이라면 filter보단 map을 사용하는 것이 좋다.


const marbles = input.map((v,idx)=>{
        if(idx !== 0 ) return v.split(' ').map(el=>+el)
}).filter(el=>el)
console.log(marbles);
// 그런데 map에서 조건에 해당하지 않는 부분은 undefined로 처리된다.
// 이를 해결하는 방법은 없을끼? undefined를 무시하는 건?
// 아 filter로 정제가 가능하다 그 이유는 filter는 f를 무시하기에 그럼 undefined는 f란 소리다.

// 2. 옥구슬 위치 배열에서 x,y의 최소 최대 값 구하기

// 어떻게 이 배열에서 최소 최대를 구할까?
const xarr = marbles.map((el)=>el[0])
console.log(xarr);
const yarr = marbles.map(el=>el[1])
console.log(yarr)
// 여기서 개념은 x,y 값이 차이가 있을때 대지의 넓이를 측정할 수 있는 것이다.
// 그래서 x y의 최소 최대 값이 0이 아닌 부분을 판별하기 위해 각 좌표 값이 담긴 배열을 만들었다.
console.log(Math.max(...xarr), Math.min(...xarr))
console.log(Math.max(...yarr), Math.min(...yarr))
const a = Math.max(...xarr) - Math.min(...xarr)
const b = Math.max(...yarr)-Math.min(...yarr)
console.log(a*b)