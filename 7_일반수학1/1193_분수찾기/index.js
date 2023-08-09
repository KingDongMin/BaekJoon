const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

// /** [ 1193 - 분수찾기 ]
//  * - 무한히 큰 이중 배열이 있다.
//  * - 각 원소에는 1/1, 1/2 ... 2/1, 2/2 ...분수들이 순차적으로 있다.
//  * 지그재그 순서로 배열을 순회할때 x번째 분수를 구하시오.
//  */

// // 일단 무한한 배열을 만들 수 없다.
// // 일정한 규칙은 뭘까? 
// // 3번째 이후로는 N/1 ~ 1/N을 순회한다.
// // 만일 1/1일때 1/1의 대각 선의 방향에 값이 있는 지에 따라 방향을 결정한다?
// // 1번째는 1/1이고
// /**
//  * 2번째는 1/1기
//  */

// let x = Number(input[0]);



// // // 입력 x가 어디 층인지 파싱하기
// // const arr  = Array.from({length: x}, (v, i)=>i+1);


// // let size = 2;
// // let arr1 = new Array([])
// // arr1[0].push(1);
// // console.log(arr1[0].length)
// // // 2일때
// // if()
// // console.log(arr1)

// // // // 이중 배열로 다시 만들기
// // // for(let i  = 0 ; i < arr.length ; i++){
// // //     console.log(arr[i])
// // //     // 1,2,3.. 순차적으로 배열을 만든다?
// // //     // 만일 1의 크기인 배열에 값이 있으면 다음 2의 크기인 배열을 만든다?
// // // }

// // -> 층을 알기 위해 이중 배열로 입력 값만큼 순차적인 배열을 만들고 그 배열에서 1,2,3... 크기로 이중 배열을 만드려고 했으나 연산이 복잡해지고 시간복잡도가 늘어날 것으로 예상하여 다른 방안을 찾아 봄

// // 입력 값이 몇 층인지 알아보기
// x;
// let floor = 1;
// let result = x;

// while(result > 0){
//     result = result - floor;
//     result > 0 && floor++;
// }
// console.log(`입력값 : ${x}, 층 : ${floor}`)


// floor % 2 == 0 ? console.log('짝 even') : console.log('홀 odd')

// // 해당 층 인덱스
// let index = floor + result -1;
// console.log(`입력값이 해당 층에서의 index = ${index}`)

// let denominator, numerator;
// denominator = 1,
// numerator = floor


// let arr = [];
// for(let i= 1; i <= floor ; i++ ){
//     console.log(` 분자 / 분모 == ${numerator}/${denominator}
//                 `)
//     arr.push(`${numerator--}/${denominator++}`)
// }
// console.log(arr)
// console.log(arr[index])

let x = Number(input[0]);
let floor = 1;
let result = x;

while(result > 0){
    result = result - floor;
    result > 0 && floor++;
}

let index = floor + result -1;
let numerator = floor, denominator = 1;
if(floor % 2 == 0){
    numerator = 1;
    denominator = floor;
}else{
    numerator = floor;
    denominator = 1;
}

let arr = [];

for(let i= 1; i <= floor ; i++ ){
    arr.push(`${numerator}/${denominator}`)
    if(floor % 2 == 0){
        numerator++
        denominator--;
    }else{
        numerator--;
        denominator++;
    }
}
console.log(`
x : ${x} \n
floor : ${floor} \n
result : ${result} \n
index : ${index} \n
num,den : ${numerator}, ${denominator} \n
arr : ${arr}
arr[${index}] : ${arr[index]}
`)
