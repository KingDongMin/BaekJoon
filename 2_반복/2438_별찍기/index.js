const fs = require('fs');

const input = fs.readFileSync("example_input.txt").toString().split('\n')

/** 별찍기
 * 마지막만 별 찍는거...?
 * 일단 생각
*/
const num = Number(input[0]);
let result = '';

for(let i = 1 ; i <= num ; i++){
    for(let j = num ; j >= 1 ; j--){
        if(j <= i){
            result += '*'
        }else{
            result += " "
        }
    }
    result += '\n'
}

console.log(result)