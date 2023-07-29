const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 2566 - 최댓값 ]
 * - 2차원 배열에서 최댓값과 인덱스 찾기
 */

let result = 0;
let index = '';


for(let i = 0 ; i < input.length ; i++){
  const arr = input[i].split(" ").map(el=>+el)
  for(let j = 0 ; j < arr.length ; j++ ){
    if(result < arr[j]){
      result = arr[j];
      index= `${i+1} ${j+1}`;
    }
  }
}

console.log(result);
console.log(index);