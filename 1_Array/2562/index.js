/**
 * 문제번호 : 2562
 * 링크 : https://www.acmicpc.net/problem/2562
 */
const fs = require('fs');

const input = fs.readFileSync('example_input.txt').toString().split("\n");

const arr = input.map(item=> Number(item.replace(/\r/g,"")))

let temp = arr[0];

for(item of arr){
    if(item > temp) temp = item;
}

console.log(temp);
console.log(arr.indexOf(temp)+1)

/**
 * < 리뷰 >
 * # 파일 입력 값 \r 제거 : replace + 정규표현식
 * # 배열 값 조회 : map
 * # 배열 요소 값 인덱스 조회 : indexOf
 * 
 * 
 */
