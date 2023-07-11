const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

const [basket_number, number ] = input[0].split(' ').map(el => +el);

// [ 배운 개념들 ...]

/**
 * Q. 어떻게 순차적인 배열을 만들 수 있을 까?
 * A. 
 * - Array 객체를 이용한다.
 * - Array 객체의 from메소드는 Array를 만들때 값을 초기화한다.
 * - 첫번째 parm에는 주로 사이즈를 선정한다.
 * - 두번째 parm에는 콜백으로 각 element에 대한 map과 같다. -> 이를 이용하여 순차적 값을 초기화할 수 있다.
 */
// Array객체를 이용한 배열 생성
const arr = Array.from({length : basket_number}, (ele, idx)=> idx+1 );

const flips = [];
for(let i = 1 ; i <= number ; i++){
    const flip = input[i].trim().split(' ').map(el => +el)
    flips.push(flip)
}

/**
 * for..of : 배열 요소 탐색 <-> for..in : 객체 key 탐색
 * slice : 배열 시작 idx부터 끝 idx까지 자르기 / 원본 유지
 * splice : 배열 시작 idx부터 N개 요소 자르기 / + 새로운 값 추가 / 원본 변경
 */
for(let flip of flips ){
    let [i,j] = flip.map(el => el-1);
    let arr1 = arr.slice(i,j+1).reverse();
    arr.splice(i,(j+1)-i, ...arr1);
}

// 결과 값 출력
console.log(`result = ${arr.join(" ")}`);