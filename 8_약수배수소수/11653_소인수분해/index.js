const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** [ 11653 - 소인수 분해 ]
 * - 정수 N의 소인수를 출력하기
 */

/** [ 풀이 과정 ]
 * 1. 소수를 판별하는 함수를 구현하여 N의 약수 중 소인수를 구한다.
 * 2. 소인수를 이용해 N을 소인수분해 연산을 하여 출력한다.
 */

// 입력값
const N = Number(input[0])

// 소수 판별 함수 : isPrime
const isPrime = (number) => {
    if(number == 1) return false;
    if(number == 2 ) return true;

    const s = Math.ceil(Math.sqrt(number))

    for(let i = 2 ; i <= s ; i++){
        if(number % i == 0 ) return false
    }
    return true
}


// 소인수가 담길 배열
const arr = [];

// 1. N의 소인수 구하기
for(let i = 2 ; i <= N ; i++){

    if(N % i == 0 && isPrime(i)){
        arr.push(i)
    }
}


let number = N;

// 소인수분해 배열
let arr2 = [];

// number가 1이 될때까지 소인수 분해
while( number > 1){

    // 소인수로 나누기 : 나머지가 0이되는 소인수로 연산
    for(let i = 0 ;  i < arr.length ; i++){
        if( number % arr[i] == 0){
            arr2.push(arr[i])
            number = number / arr[i];
            break;
        }
        console.log(`반복횟수 : ${i}`)
    }
}

//오름 차순으로 출력
const result = arr2.sort((a,b)=>a-b)
console.log(result.join('\n'))

