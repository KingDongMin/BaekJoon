const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 2903 - 중앙 이동 알고리즘 ]
 * - 정사각형 각 변의 중앙에 점을 추가한다.
 * - 정사각형 중심에 점을 추가한다.
 * - 위의 과정을 1번 거칠때 4개의 사각형이 생긴다.
 * - 위의 과정을 N번 처리하였을때 점의 갯수
 */

// n번 연산을 할때 한 열의 사각형의 갯수는 2**n으로 늘어난다.
// 한 열에 사각형이 2**n개일때 열의 꼭지점은 2**n+1개이다.
// 행 또한 열의 꼭지점의 갯수와 같으므로 행 * 열로 전체 꼭지점 갯수를 구함


const operationCount = Number(input[0]); //연산횟수
const squares = 2**operationCount // n번 연산시 한 열(행)의 사각형 갯수
const dotInColumn = squares+1 // 연산 후 한 열(행)의 꼭지점 수
console.log( dotInColumn**2) // 전체 꼭지점 수 : 행 * 열

/** [ 리뷰 ]
 * - 일정 규칙을 찾으려고 시간이 걸림
 * - 규칙을 찾을때 불규칙한 것은 배제할 것
 * - Math.pow( base, exponent ) : 제곱근 구하기 다른 방법
 * - Math.pow(2,3) == 2 ** 3 
 */