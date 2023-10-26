const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 2750 - 수 정렬하기 ]
 * - 주어진 N개의 수를 오름차순으로 정렬하시오.
 * 
 * 버블 정렬을 이용하였다.
 * 버블 정렬이란 기준 원소를 증가해가며 기준과 인접한 원소를 비교해 자리를 바꾸는 정렬이다.
 * 
 * 
  */
const arr = input.filter((el,idx)=>idx!==0 ).map(el=>+el);

// 버블 정렬로 풀어보기
// 인

for(let l = arr.length ; 0 < l ; l--){
    for(let i = 0 ; i < l-1 ; i++){
        if(arr[i] > arr[i+1] ){
            const temp = arr[i+1];
            arr[i+1] = arr[i]
            arr[i] = temp
        }
    }
}


for(el of arr){
    console.log(el)
}










