const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 5073 - 삼각형과 세변 ]
 * - 세 변의 길이가 주어졌을때 삼각형을 판별하시오.
 * - 가장 긴 변의 길이가 남은 두 변의 합보다 클때 삼각형이 아니므로 invaild를 출력하시오.
 * - 입력값은 마지막 0 0 0 이전까지 입니다.
 * - Equilateral :  세 변의 길이가 모두 같은 경우
 * - Isosceles : 두 변의 길이만 같은 경우
 * - Scalene : 세 변의 길이가 모두 다른 경우
 */

/** [ 사고 과정 ]
 * - 세 변에서 같은 길이의 변을 찾기 위해 set을 이용한다.
 * - 같은 변이 있다면 set의 size가 달라지는 특성을 이용한다.
 * - 세 변이 같다면 set의 결과는 1개의 요소만 남아 set.size == 1이 된다.
 * - 두 변의 길이가 같다면 2 , 모두 다르다면 3이다.
 */

/** [ 풀이 과정 ]
 * 1. 각 세 변의 길이를 측정하기 위해 입력값을 이중 배열로 초기화
 * 2. isTriangle함수를 생성
 * 3. for..of..를 이용하여 각 세 변의 배열 조회
 * 4. 세 변의 길이 중 0이 있다면 반복 종료 ( 맨 마지막 입력값 )
 * 5. 세 변의 길이 중 제일 긴 변과 나머지 변의 합을 연산하여 Invaild 판별
 * 6. set을 이용하여 세 변들 중 같은 변을 찾고 set.size의 결과에 따라 삼각형 종류 판별
 */

// 1. 입력값을 이중 배열로 초기화 -> 함수의 매개변수로 이용
const sides = input.map(el=>el.split(' ').map(el=>+el));

// ## 함수 호출
isTriangle(sides)

// 2. 함수 생성 : 삼각형 판별
function isTriangle(array){

    // 3. for..of..로 각 세 변의 배열 조회
    for(el of array){

        // 4. 마지막 입력값 0 0 0 판별
        if(el[0] === 0 ) return

        // 5. 가장 긴 변과 나머지 변들의 합을 비교하여 Invaild 판별
        const max = Math.max(...el) // 가장 긴 변
        const sum = el.filter((value,idx)=>idx!==el.indexOf(max)).reduce((acc,cur)=>acc+cur) // 나머지 변들의 합

        // 나머지 변들의 길이 합이 가장 긴 변의 길이보다 작거나 같다면 Invaild
        if(max >= sum){
            console.log('Invalid')
            continue;
        } 

        // 6. set을 이용하여 세 변에서 같은 길이라면 중복 제거
        const duplicate = new Set(el)
        // set.size를 이용하여 삼각형 판별
        switch(duplicate.size){
            case 1:
                console.log('Equilateral')
                break;
            case 2:
                console.log('Isosceles');
                break;
            default:
                console.log('Scalene')
                break;
        }
    }
}

/** [ 리뷰 ] 
 * - 블로그에 올리는 코드에는 주석을 줄이는 것이 좋겠다.
*/