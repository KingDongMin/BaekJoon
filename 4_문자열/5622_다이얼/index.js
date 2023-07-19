const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split(' ')

/** [ 5622 - 다이얼 ]
 * 금속핀이 돌아가는 옛날 다이얼
 * 특정 숫자를 걸기 위해선 N초가 걸린다.
 * 각 숫자에는 알파벳이 포함되어 있다.
 * 출력시 다이얼을 걸기 위한 최소 시간을 구하라
 * 
 * 
  */

// 주어진 입력값을 각 알파벳 배열로 초기화
const word = [...input[0]]

// 각 알파벳에 해당하는 다이얼이 걸린 시간을 Map객체로 초기화
const dial = new Map()

// 각 알파벳 다이얼이 걸리는 시간 매핑
dial.set('ABC',3);
dial.set('DEF',4);
dial.set('GHI',5);
dial.set('JKL',6);
dial.set('MNO',7);
dial.set('PQRS',8);
dial.set('TUV',9);
dial.set('WXYZ',10);

// 걸린 시간 : 출력값
let sum  = 0; 

// 각 알파벳을 순회
for(const el of word){

    // for문 A / 다이얼의 각 element를 순회
    for(const [key,value] of dial){

        // key를 spread하여 각 알파벳이 포함되는지 확인
        // 배열 안에서 특정 값이 포함되는지 확인하기
        // {{ 배열.includes(특정값, [시작인덱스]) }}
        if([...key].includes(el)){
            sum+=value;

            // 만일 if에 충족된다면 for문 A를 빠져나옴
            // -> 효율성을 위해서 순회 중단
            break;
        }
    }
    
}
console.log(sum)


// 다른 사람 풀이 분석
// 주로 객체를 이용하여 풀이 -> map대신 객체를 이용함
// 이중 for문을 사용

