const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 9506 - 약수들의 합 ]
 * - N의 약수 중 N을 제외한 약수들의 합이 N과 같다면 완전수라고 한다.
 * - 완전수일 경우 N의 약수들의 합으로 출력하고
 * - 아닐 경우는 N is NOT perfect로 출력한다.
 */

const arr = input.map(el =>  +el );

// 약수 구하기
for(el of arr){
    if(el == -1) break; // 맨 마지막 입력값 -1 제외
    
    let arr2 = []; // 약수가 담길 배열

    // 약수 구하기
    for(let i=1 ; i < el ; i++){
        el%i == 0 && arr2.push(i)
    }

    // 완전수 결과
    const isPerpect = el == arr2.reduce((sum, el) => sum+el);
    
    if(isPerpect){
        console.log( `${el} = ${arr2.join(' + ')}`)
    }else{
        console.log(`${el} is NOT perfect.`)
    }
}