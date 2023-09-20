const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split(' ');

/**
  [ 19532 - 수학은 비대면강의입니다 ]
  - ax + by = c
    dx + ey = f 란 연립 방정식이 주어진다.
  -  -999이상 999이하의 정수에서 x, y의 값을 구하여라
  
  [ 사고 방식 ]
  - x와 y의 값을 찾기 위해 브루트포스(완전탐색)을 사용하여 풀 수 있다.
  - 하지만 제한 시간이 주어져 있으며 보다 효율적인 프로그래밍이 필요하다.
  - 연립 방정식을 이용하여 풀이한다.

  [ 리 뷰 ]
  - 제한시간으로 인하여 브루트포스 방식으로 풀면 안된다고 생각했지만 생각보다 연산 시간이 제한 시간보단 짧았다.
  - 우선 브루트포스 문제이니 우선 부르트포스 방식으로 문제를 접근해야겠다.
 */


let [a,b,c,d,e,f] = input.map(el=>+el)

// 방법1. 브루트포스(완전탐색)
for (let x = -999 ; x <= 999 ; x++){
  for(let y = -999 ; y <= 999 ; y++){
    if(a*x + b*y == c && d*x + e*y == f){
      console.log(x+" "+y);
      break;
    }
  }
}

// 방법2. 연립방정식
let x = (c * e - b * f) / (a * e - b * d);
let y = (c * d - a * f) / (b * d - a * e);
console.log(x+" "+y)