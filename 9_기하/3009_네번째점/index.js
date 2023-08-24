const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');


/** [ 3009 - 네 번째 점 ]
 * - 세 점이 주어졌을때, 축에 평행한 직사각형을 만들기 위한 네 번째 점을 출력하시오. 
 * 
 */

/** [ 풀이 과정 ]
 * - 좌표에서 직사각형의 꼭지점은 x, x', y, y'로 존재하므로 경우의 수를 이용한다.
 */

// 1. 입력값
const A = input[0].split(' ')
const B = input[1].split(' ')
const C = input[2].split(' ')

// 2. 중복을 제거하여 각 축에 2개의 값만 남기기
const x = [...new Set([A[0], B[0], C[0]])]// x, x'
const y = [...new Set([A[1],B[1],C[1]])]// y, y'

// 3. 현재 존재하는 세 점을 초기화
const points = { [A]:true, [B]:true, [C]:true}

// 4. x와 y를 참고하여 points배열에 없는 점을 출력
for(let i = 0 ; i < 2 ; i++){
    for(let j = 0 ; j < 2 ; j++){
        if(!points[`${x[i]},${y[j]}`]){
            console.log(`${x[i]} ${y[j]}`)
        }
    }
}

/** [ 리뷰 ]
 * - new Set('배열') : 배열 안 중복을 제거한 자료구조
 * - 다른 풀이로는 XOR을 이용한 풀이가 있음
 * - 왜 XOR을 사용할 생각을 했을까? 
*/