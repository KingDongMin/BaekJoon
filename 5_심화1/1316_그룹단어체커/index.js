const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 1316-그룹단어체커 ]
 * 
 * - 주어진 문자열에서 연속적으로 쓰인 문자를 식별하기
 * 
 * 예 ) aabbcc (o) : 그룹문자
 *      aabbcca (x) : a가 마지막에 다시 쓰임
 *      kin (o)
 *      kink (x) : k가 다시 쓰임
 */

// 입력 단어 갯수
const count = Number(input[0])

// 연속된 문자 갯수
let result = 0;

// 입력된 단어 순차 조회
for(let i = 1 ; i <= count ; i++){
  
  // 연속된 단어 체크
  let check = [];

  // 단어 조회 후 조건에 따른 값 초기화
  let rs = [...input[i]].every((value,idx,arr)=>{

    // 이전 문자에 현재 문자가 있거나 이전 문자가 다르다면 false ( 반복 종료 )
    if(check.includes(value) && value !== arr[idx-1]){
      return false;
    }else{
      check.push(value)
      return true;
    }
  });

  // 연속된 단어일 경우 (true)만 결과값 증가
  rs && (result+=1)
}

// 결과 출력
console.log(result)

/** [ 개념 ]
 * - 연속된 단어를 위해 배열 조회가 필요했다.
 * - forEach를 통해 요소값을 조회하고 조건에 해당하면 반복을 종료한다.
 * - 기존 forEach에서 break를 사용하여 조건에 따른 반복을 종료하지 못한다.
 * - 그 방안으로 forEach대신 every 메소드를 사용하였다.
 * 
 * Array.every((value[,idx , array])=>{ .... }) : 배열 조회시 return값에 따라 반복 종료 or 계속
 * forEach와 사용은 같으나 return false일 경우 every 종료 , return true일 경우 every 계속
 * every의 결과는 return이 false가 나오면 false를 반환
 * every의 결과가 모두 true일 경우 true를 반환
 * 
 * 요약 정리 : forEach에서 조건에 따른 반복 종료가 필요할 경우 every를 사용한다. 
 */