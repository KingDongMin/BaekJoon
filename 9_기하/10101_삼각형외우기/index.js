const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 10101 - 삼각형 외우기 ]
 * - 세 각이 주어졌을때 삼각형의 종류를 출력한다.
 */

/** [사고 과정]
 * - 세 각을 통해 삼각형을 판별하기 위해 함수를 구현한다.
 */

/** [ 풀이 과정 ]
 * 1. 세 각의 입력 값을 받아와 배열로 초기화 한다. 
 * 2. 삼각형 판별 함수를 생성한다.
 * 3. reduce를 이용하여 세 각의 합을 구한다.
 * 4. set을 이용하여 세 각의 배열에서 중복값을 제거한다.
 * 5. reuduce와 set의 결과를 통해 if와 switch...case를 이용하여 삼각형을 판별한다.
 */

const angles = input.map(el=>+el);
isTriangle(angles)

function isTriangle(arr){
    const sum = arr.reduce((acc,cur)=>acc+cur)
    const set = new Set(arr)

    if(sum !== 180){
        console.log('Error')
        return;
    }

    switch(set.size){
        case 1:
            console.log('Equilateral');
            break;
        case 2:
            console.log('Isosceles');
            break;
        default:
            console.log('Scalene')
            break;
    }
    
}

/** [ 리 뷰 ]
 * - every를 이용하여 배열의 모든 중복값을 찾을 수 있다. ( arr.every(el=> el == 60))
 * - some을 이용하여 배열의 특정 중복값을 찾을 수 있다. ( arr.some(el=> el == 70))
 */