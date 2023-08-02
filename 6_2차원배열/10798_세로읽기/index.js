const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 10798 - 세로읽기 ]
 * 주어진 2차원 배열세로 읽기
 */


let arr = input.map(ele => [...ele]); // 2차원 배열로 생성
let arrsLength = arr.map(ele=>ele.length); // 2차원 배열 arr의 자손배열 중에서 제일 긴 길이 추출
const maxLength = Math.max(...arrsLength);

let result = '' // 출력 값 초기화

for(let i = 0 ; i < maxLength ; i++){
  for(let j = 0 ; j < arr.length ; j++ ){
    if(arr[j][i]){// 지정한 인덱스에 값 확인
      result+=arr[j][i]
    }
  }
}
console.log(result);

// 결론 : 여러 가지의 테스트 케이스를 생각해야 한다. ( 입력 값이 없을 때와 최대일때 등)

/** [ 다른 사람 코드 분석 리뷰 ]
 * 해당 위치에 값이 없을 경우 오류를 피하기 위해 나는 if문을 사용하였지만 다른 분은 || 연산자 사용
 * ex ) result += arr[j][i] || ""
 */