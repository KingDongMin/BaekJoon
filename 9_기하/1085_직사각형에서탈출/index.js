const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split(' ');


/**
 * [ 1085 - 직사각형에서 탈출 ]
 * - 한수가 x,y좌표에 있을 직사각형의 경계선까지 도달하는 최소값을 출력하기
 */

/** [ 풀이 과정 ]
 * - 직사각형의 각 변은 좌표와 평행하며 x,y를 기준으로 0,0 과 w,h 차를 구하여 최소값을 출력한다. 
 */

const x= Number(input[0])
const y= Number(input[1])
const w= Number(input[2])
const h= Number(input[3])


const min_x  = w - x < x ? w-x : x ;
const min_y = h - y < h ? h-y : y;
console.log(min_x < min_y ? min_x : min_y);





