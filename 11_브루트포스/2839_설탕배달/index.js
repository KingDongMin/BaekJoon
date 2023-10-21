const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 2839 - 설탕 배달 ]
 * - N킬로그램의 설탕을 배달하기 위해 봉지에 담아야한다.
 * - 봉지는 3킬로그램과 5킬로그램이 있다.
 * - 최소한 적은 갯수의 봉지를 배달할때 몇 개의 봉지를 가져가면 되는지 출력하시오.
 */

const sugar = Number(input[0]);
const arr = [];
for(let i = 0 ; i < Math.floor(sugar/3) ; i++){
    const bongi = (sugar - 5 * i )/3
    if(bongi < 0 ) break;
    if(!Number.isInteger(bongi)) continue;
    arr.push(bongi + i)
}
console.log( arr.length == 0 ? -1 : Math.min(...arr) )






