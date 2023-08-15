const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split(' ');

/** [ 2869 - 달팽이는 올라가고 싶다 ]
 * - 입력값 : A , B , V
 * - 달팽이는 V높이의 나무를 올라갈 때 낮에는 A만큼 올라가지만 저녁에는 B만큼 미끄러진다.
 * - 이때 달팽이가 나무의 정상에 오르는 일 수를 구하시오.
 */

const A = Number(input[0]); // 오른 높이 
const B = Number(input[1]); // 미끄러진 높이
const V = Number(input[2]); // 최종 높이

/** 
 * 달팽이의 낮에 오를 수 있는 높이가 A일때 최소 V-A미터까지 도달하면 다음날 낮에 정상에 도달한다.
 * 달팽이가 실질적으로 하루 오른 미터는 A-B미터 이므로 하루 오른 미터를 최소 도달 높이(V-A)에 나누면 
 * 최소 높이까지 최소 며칠이 걸리는 지 알 수 있다.
 */
let min = (V-A) / (A-B) // 최소 높이에 도달한 일 수

/**
 * 만일 min이 실수가 나온다면 달팽이는 최소 높이보다 더 오른 격이다.
 * 이는 최소 높이보단 더 올랐지만 하루가 소요됐다는 뜻이므로 소수점을 제거하고 하루를 추가한다.
 */
if(!Number.isInteger(min)){
    min = parseInt(min)+1
}
console.log(min +1 )

/** [ 리 뷰 ]
 * - 문제를 해결하기 위해 최소 단위로 차근차근 생각하는 시간이 중요하다 깨달았다.
 * - NUmber.isInteger(''숫자'') : 숫자가 실수인지 정수인지 판별
 * - Math.ceil(''실수'') : 실수인 경우 소수점을 제거하고 +1을 하는 메소드 / 소수점이 있을때 값을 올린다.
  */
