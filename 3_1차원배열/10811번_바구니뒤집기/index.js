const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** 
 * [ 10811번 - 바구니 뒤집기 ]
 * 
 * - 첫째 줄은 바구니 N개와 뒤집기 M번이 주어진다.
 * - N개의 바구니는 1번부터 N번까지 순차적이다. 12345...
 * - 둘째 줄부터는 i j로 각 바구니 번호를 말하며 그에 해당하는 바구니를 바꾼다. 
 * 
 * 
*/

// 바구니 갯수 : baskets, 뒤집기 횟수 : number 
const [baskets, number ] = input[0].split(' ').map(el => +el);

/**
 * Q. 어떻게 쉽게 순차적인 배열을 만들 수 있을 까?
*/
const arr = [];

// 순차적 바구니 만들기
for(let i = 1 ; i <= baskets ; i++){
    arr.push(i);
}

// input[1]부터 끝까지 뒤집기 값임
// i ~ end를 조회하여 모든 값 가져와야함
// ( 단어 일괄 수정 : ctrl + shift + L : 단어 드래그 후.. ) 
const flips = [];

// 바구니 뒤집기 총 횟수 
for(let i = 1 ; i <= number ; i++){
    const flip = input[i].trim().split(' ').map(el => +el)
    flips.push(flip)
}


// 뒤집기 갯수 만큼 뒤집기 시행
for(let flip of flips ){
    let [i,j] = flip.map(el => el-1);
    // 배열의 부분 뒤집기는 어떻게 하는 것인가?
    // 원본 유지 후 부분 자르기 : splice
    let arr1 = arr.slice(i,j+1).reverse();
    // 부분을 삭제하고 새로운 역순 값으로 설정하기 : splice
    arr.splice(i,(j+1)-i, ...arr1);
    
}

// 결과 값 출력
console.log(`result = ${arr.join(" ")}`);

/**
 * [ Log ]
 * #1 = 틀림
 * 그 이유는 뭘까?
 * 스위칭이 아니라 역순이였음
 * 배열 자르기, 배열 뒤집기
 *
 * #2 = 완료
 * 
 * 
 */