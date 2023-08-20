const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

 /**
  * [ 2581 - 소수 ]
  * - M과 N사이의 소수를 구하여 소수의 총합과 최소 소수값을 출력한다.
  * - 단, 소수가 없다면 -1을 출력한다.
  */

 /**
  * [ 해결 방안 ]
  * - M과 N사이의 소수를 구하기 위해 해당 자연수의 약수를 구한다.
  * - 약수가 2개 이하인 경우에 소수로 판별한다.
  */

 /**
  * [ 풀이 과정 ]
  * 1. 입력값을 받아와 M과 N을 초기화한다.
  * 2. M이상 N이하의 자연수 구한다.
  * 3. 범위 내의 각 자연수가 소수인지 판별한다.
  * 4. 소수인 경우 배열에 추가한다.
  * 5. 소수들의 합을 구한다.
  * 6. 최소 값을 가진 소수 출력한다.
  * 7. 소수가 없는 경우 -1을 출력한다.
  */

 const M = Number(input[0]);
 const N = Number(input[1]);

 const arr = []; // 소수가 담길 배열

 for(let i = M ; i <= N ; i++){ // M부터 N까지 각 자연수
    
    let count = 0; // 약수의 개수

    for(let j = 1 ; j <= i ; j++){

        if(count > 2) break; // 약수가 2개를 초과하면 반복 중단
        
        if(i%j == 0){
            count++; // 약수일 경우 카운트 증가
        }
    }

    count == 2 && arr.push(i); // 해당 자연수의 약수가 2개라면 소수 -> 배열에 추가
}

console.log(`--- 기존 풀이 ---`)
if(arr.length == 0){ // 소수가 없다면
    console.log(-1)
}else{
    const sum = arr.reduce((sum,ele)=>sum+ele) // 소수들의 총합
    console.log(sum)
    console.log(arr[0]) // 소수들의 최소값
}

/** 
 * [ 리뷰 ]
 * - 기존의 방식은 자연수의 크기가 늘어날 수록 처리 속도가 느려진다.
 * - 제곱근과 에라토스테네스의 체를 이용하여 불필요한 소수 판별 연산을 줄일 수 있다.
 * 
*/

/** 
 * #1 제곱근을 이용한 소수 판별
 * - 제곱근을 통해 약수의 개수를 유추할 수 있다.
 * - 해당 자연수의 제곱근이 정수라면 제곱근이하 약수 * 2 + 1 = 총 약수 개수
 * - 제곱근이 실수라면 제곱근은 정수 약수가 아니므로 -1
 * - 예) 16의 약수 [1,2,4,8,16] -> 제곱근 4미만의 약수 2개 -> 2 * 2 + 1 = 5개
 * - 예) 28의 약수 [1,2,4,7,14,28] -> 제곱근 5.291.. 미만 약수 3개 -> 3*2 = 6개
 * - 소수는 1과 자기 자신을 약수로 하는 수이므로 제곱근이하의 약수가 1이 아닌 다른 수가 나온다면 소수가 아님
 * - 제곱근이하 까지 연산하기에 연산 처리속도가 개선된다.
 */

const x = Number(input[0]);
const y = Number(input[1]);

const arr2 = []; // 소수가 담길 배열

function isPrime(number){
    if(number === 1 || number === 2) return true;
    const s = Math.ceil(Math.sqrt(number));
    for(let i = 2 ; i <= s ; i++ ){
        if(number % i  == 0) return false;
    }
    return true;
}

for(let i  = x ; i <= y ; i++){
    isPrime(i) && arr2.push(i)
}

console.log('--- 제곱근 풀이 ---')
const result = arr2.length > 0 && arr2.reduce((sum,ele)=>sum+ele)
console.log(result)
console.log(arr2[0]);


/**
 * #2 에라토스테네스의 체
 * - 일정 범위의 자연수에서 소수의 배수를 제외한 나머지가 소수이다.
 * - 1 ~ 100까지의 각 자연수를 조회한다. 최소 소수 2부터 순차적으로 소수 배수를 제외한다.
 * - 조회시 소수의 배수일 경우 연산에서 제외되어 처리 속도가 개선된다.
 * 
 * !! 자신을 제외한 배수를 제외하면 소수만 남는다.
*/

const A = Number(input[0]);
const B = Number(input[1]);

const notPrimes = { 1 : true }; // 소수의 배수가 들어간다.

for(let i = 2 ; i <= B ; i++){
    if(notPrimes[i]){ // 소수가 아닌 경우를 판별
        continue;
    }
    
    // 소수의 배수인 경우 true 
    for(let j = i*2 ; j <= B ; j+=i){
        notPrimes[j] = true;
    }
}

const primes = []; // 소수

// A부터 B까지 조회
for(let i = A ; i <= B ; i++){
    if(!notPrimes[i]){ // 해당 자연수가 소수라면
        primes.push(i); 
    }
}

console.log('--- 에라토스테네스의 체 ---')
if(primes.length > 0 ){
    console.log(primes.reduce((sum,ele)=>sum+ele))
    console.log(primes[0])
}else{
    console.log(-1)
}
