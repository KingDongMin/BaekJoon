const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 3003 - 체스 ]
 * 킹, 퀀, 룩, 비숍, 나이트, 폰
 * 1 1 2 2 2 8
 * 일때 부족하거나 빼애할 체스말 구하기
 *
 */

// 기존 체스 말 세팅
const chess = [1,1,2,2,2,8]
const arr = input[0].split(' ').map(el=>+el)


// 각 배열을 비교하여 결과 값 출력
// 특정 길이를 가지는 배열(Array) 생성 : Array(arraylength)
// 배열(Array)의 각 요소에 값을 초기화 하는 메소드 : Array.fill(초기화값[,시작인덱스[, 끝인덱스]])
let rs = new Array(6).fill(0)

for(let idx = 0 ; idx < chess.length ; idx++){
    const result = chess[idx] - arr[idx]
    rs[idx] = result
}
console.log(rs.join(' '))