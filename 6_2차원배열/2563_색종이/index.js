const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 2563 - 색종이 ]
 * 너비가 100 x 100인 도화지에 너비가 10 x 10인 색종이가 겹칠때 너비를 구하시오.
 * 단, 색종이는 겹칠 수 있습니다.
 */

// 색종이 갯수
const colorPaperCount = Number(input[0]);

// 도화지 생성 : 100 x 100 크기를 가지며 0으로 채워진 배열 생성
const pager = Array(100).fill().map(ele=> Array(100).fill(0));

// 각 색종이 생성 : 각 색종이의 시작 좌표 x,y를 담은 배열 생성
let colorPapers = [];
for(let i = 1 ; i <= colorPaperCount ; i++){
  colorPapers.push(input[i].split(' ').map(el=>+el));
}

// 도화지에 각 색종이 겹치기
for(let i = 0 ; i < colorPapers.length ; i++){
  const cur_colorPaper = colorPapers[i]; // 현재 색종이
  const cur_x = cur_colorPaper[0] // 현재 색종이 x
  const cur_y = cur_colorPaper[1]; // 현재 색종이 y
  
  // 겹치는 부분을 1로 초기화
  for(let x = cur_x ; x < cur_x+10 ; x++){
    for(let y = cur_y ; y < cur_y+10 ; y++){
        pager[x][y] = 1;
    }
  }
}

// 도화지(배열)에서 요소가 1인 값을 카운트
let result = pager.reduce((acc,v)=>{
  return acc + v.reduce((acc,v)=>acc + (v==1),0)
},0);

// 결과
console.log(result);

// // 이해를 돕기 위한 출력 값
for(let i = 0 ; i < pager.length-70 ; i++){
  console.log(pager[i].join(''))
}

/** [ 리뷰 ]
 * - 초기에 각 색종이의 x좌표 범위와 y좌표 범위를 구해 서로 겹치는 부분을 파싱하여 연산하려고 했다.
 * - 하지만 여러 색종이가 여러겹 겹치는 경우 이중, 삼중 ...으로 겹치기에 연산 횟수가 늘어나기에 코딩하기 어려웠다.
 * - 결국 다른 사람의 코드를 참조하여 풀었다.
 * - 도화지는 100 x 100 사이즈 배열에 값은 0으로 초기화하여 생성하였다.
 * - 도화지에 색종이가 삽입되는 부분을 1로 채웠다.
 * - 색종이끼리 겹친 부분도 1로 초기화하였다.
 * - 도화지에 값이 1인 부분을 세었다.
 * - 도화지의 1의 갯수가 색종이들의 총 너비다.
 */

/** [ 개념 ]
 * - Array(n).fill(value) : 배열의 크기를 생성하고 그 안에 초기값으로 채우기
 * - Array(100).fill(Array(100).fill(0))일때 왜 arr[1][1]을 할 경우 각 요소의 arr[n][1]째가 다 바뀌는가?
 * 
 */

// !! 부연 설명이 필요하지만 너무 길게 쓰지 않는다. ( 블로그 ? )