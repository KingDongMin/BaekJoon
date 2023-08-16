const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split(' ');

/** [ 2501 - 약수 구하기 ]
 * - 입력값 N과 K가 주어진다.
 * - N의 약수 중에서 K번째를 구하여라.
 */

const N = Number(input[0]);
const K = Number(input[1])-1;

const arr = [];

// 약수 구하기
for(let i = 1; i <= N ; i++){
    if(N%i == 0){
        arr.push(i);
    }
}
console.log(arr[K] == undefined ? 0 : arr[K])