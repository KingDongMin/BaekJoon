const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/**
 * [ 1546 - 평균 ]
 * 첫째 줄 : 과목 개수
 * 둘째 줄 : 과목 점수
 * 
 * 과목들 중에서 최대값을 구한뒤
 * 최대값을 제외한 과목의 점수를 점수/최대값*100으로 변경
 * 변경한 점수들의 평균을 구하기
 * 
 */

// 입력값 초기화
const NumSub = Number(input[0]);
const subs = input[1].split(" ").map(el => +el);

/**
 * { Q.배열 안의 요소들 중 최대값을 어떻게 쉽게 구할 수 있을까? }
 */
// 방법 1 : 배열을 조회하여 일일히 비교
let max1 = 0;
for(let sub of subs){
    max1 < sub && (max1 = sub);   
}
// 방법 2: Math객체를 이용하여 비교적 쉽게 최대값 구하기
let max = Math.max(...subs);
// { Math.max를 이용하면 매개변수들 중 최대값을 쉽게 찾을 수 있다.}

// 점수 변경
let changes = subs.map(el=>{
    return el/max*100;
})

// Q. 배열의 총합은 어떻게 쉽게 구하나?
// A. 배열의 합계와 평균을 쉽게 구하는 방법은 reduce()를 사용하면 된다.

// reduce는 매겨변수에서 ( 누적값, 현재값 )을 받는다.
// 이를 이용하여 배열의 총 합계를 더 간단히 구할 수 있다.

// { 배열.reduce((누적,현재)=>...) : 배열 요소의 총 합계 구하기 }
const avg = changes.reduce((sum,el)=>sum+el)/NumSub
console.log(avg)
