const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 영화 감독 숌 ]
 * - 6이 적어도 3개 이상 나열된 때 첫번째 시즌이 된다.
 * - 666이 시즌1 , 그 다음 666이 나오는 정수는 1666으로 시즌2
 * - 즉, 1,2,3,.... 666, 667,668, .... 1666,...2666 으로 666이 나오는 때를 시즌으로 본다.
 * - N번째 시즌일때 666이 나오는 정수를 구하시오.
 * 
 * [ 사고 과정 ]
 * - 브루트포스 문제로 1부터 차례대로 증가시켜 정수에 666이 나오는 때를 구한다.
 * 
 * [ 리 뷰 ]
 * - 처음에 문제를 수열로 이해하여 방정식으로 풀었지만 해결되지 않았다.
 * - 문제를  
 */

const inputNumber = Number(input[0])
let count = 0;
let number = 1;
let reg = /666/;
while(true){
    number++
    (/666/).test(number) && count++
    if(count == inputNumber) break;
}
console.log(number)






