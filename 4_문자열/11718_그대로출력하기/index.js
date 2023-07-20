const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 11718 - 그대로 출력하기 ]
 * 입력된 값을 그대로 출력하기
 * ! 무슨 문제인지 모르겠다...
  */

for(string of input){
    console.log(string)
}