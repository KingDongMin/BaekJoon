const fs = require('fs');
const input = fs.readFileSync("dev/stdin").toString().trim().split('\n')

/** 
 * [ 3052 - 나머지 ]
 * 10개의 입력값에 각 42를 나눈 뒤 서로 다른 나머지값 갯수 출력하기
 * 
*/
const map = new Map();

for(let i = 0 ; i < input.length ; i++){
    const remain = Number(input[i]) % 42;
    map.set(remain , map.get(remain) ? map.get(remain) +1 : 1);
}

console.log(map.size)


