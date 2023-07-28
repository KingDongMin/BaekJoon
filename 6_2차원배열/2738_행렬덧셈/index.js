const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 2738 - 행렬 덧셈 ]
 * - N개의 행과 M개의 열로 이루어진 두 행렬을 더한다.
 * - 2차원 행렬 연산에선 Array 내장함수 (map, reduce, filter)가 많이 쓰일 것으로 예상
 */

const [row,column] = input[0].split(' '); // 행과 열

// 두 개의 행렬
let arr1 = []; 
let arr2 = [];

// 각 행렬 초기화
for(let i = 1 ; i <= row*2 ; i++){
  let line = input[i].split(' ').map(ele=>+ele);
  if(i <= row){
    arr1.push(line);
  }else{
    arr2.push(line);
  }
}

// 두 행렬의 합 연산
const result = arr1.map((line, row)=>{
  const sumLine = line.map((ele,i)=>{
    return ele+arr2[row][i]
  })
  return sumLine
})

//결과 출력
for(let row of result){
  console.log(row.join(' '))
}