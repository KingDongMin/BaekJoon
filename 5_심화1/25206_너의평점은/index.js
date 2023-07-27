const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 25206 - 너의 평점은 ]
 * - 전공 평점 구하기
 * - 전공 평점 = 전공과목별 합 / 학점 총합
 * - 전공과목 점수 ( 학점 * 과목 평점)
 * 
 */

// 과목 평점
const grades = new Map(
  [
    ['A+',4.5],
    ['A0',4.0],
    ['B+',3.5],
    ['B0',3.0],
    ['C+',2.5],
    ['C0',2.0],
    ['D+',1.5],
    ['D0',1.0],
    ['F',0.0]
  ]
)

// 전공과목별 총합, 학점 총합
let sumOfMajors = 0;
let sumOfCredit= 0;

// 각 과목을 조회 후 총합 계산
for(let major of input){
  let info = major.split(' ');
  let credit = Number(info[1]);
  let grade = grades.get(info[2]);

  // 과목 평점에 없는 P인 경우
  if(!grades.has(info[2])) continue;

  // 연산
  sumOfCredit += credit;
  sumOfMajors += credit * grade;
 
  
}

// 전공 과목별 총합 / 학점 총합
const result = (sumOfMajors/ sumOfCredit).toFixed(6)
console.log(result);

/** [학습 개념]
 * - Map을 생성 시 이중 배열로 key value를 넣으면 Map을 손쉽게 초기화 가능.
 * - float의 자릿수를 자를 땐 Float.toFixed('자를 자릿수 ')를 사용한다. 
 * 
 * 
 */