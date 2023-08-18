const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');


 /**
  * [ 2581 - 소수 ]
  * 
  * 1. 입력값은 M과 N이 있다.
  * 2. M이상 N이하의 자연수에서 소수를 구한다.
  * 3. 모든 소수의 합을 구하여 출력한다.
  * 4. 또한 소수들 중 최소값을 출력한다.
  * 5. 단, 소수가 없다면 -1을 출력한다.
  */

 /**
  * [ 해결 방안 ]
  * M이상 N이하의 각 자연수 X를 for문으로 조회한다.
  * X의 소수를 구하기 위해 1부터 X까지 나누어 약수를 구한다.
  * X의 약수가 2개인 경우 소수로 판별하고 배열A에 추가한다.
  * 배열A의 길이가 0인 경우 -1을 출력하고
  * 아니라면 reduce와 첫번째 요소로 총합과 최소값을 출력한다.
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
if(arr.length == 0){ // 소수가 없다면
    console.log(-1)
}else{
    const sum = arr.reduce((sum,ele)=>sum+ele) // 소수들의 총합
    console.log(sum)
    console.log(arr[0]) // 소수들의 최소값
}

/** 
 * [ 리뷰 ]
 * 1. 새로운 방법
 * - 제곱근을 활용하여 더 빠르게 소수를 판별할 수 있다.
 * - 기존 방법에선 정수 x는 1 ~ x 중에서 x의 약수를 찾아 소수를 판별했다.
 * - 새 방법에선 x의 제곱근(s)으로 1 ~ s 중에서 x의 약수를 찾아 소수를 판별한다.

 * 
 * 2. 원리
 * - 1부터 ~ 제곱근 범위에서 1을 제외한 약수가 나온다면 소수가 아니기 때문이다.
 * - 예를 들어 16의 약수는 [ 1, 2, 4, 8, 16]이다.
 * - 약수의 특징을 살펴보면 가운데 약수4를 기준으로 대칭한다.
 * - 이는 가운데 약수를 기준으로 약수의 개수를 파악할 수 있다.
 * - 16의 가운데 약수 4보다 작은 약수는 1과 2가 있으므로 총 약수의 개수는 2*2 + 1(가운데 약수)
 * - 이처럼 가운데 약수는 x의 제곱근으로 유추할 수 있다.
 * 
 * 다른 예로 27의 약수는 [ 1, 3, 9, 27]이다.
 * 약수의 가운데 약수가 없어도 된다.
 * 27의 제곱근은 5.196...이며 5이하의 수에서 27의 약수가 있는지 살펴본다.
 * 만일 있다면 유추할 수 있다.
 * 
 * 다른 예로 17의 약수는 [1, 17]이다.
 * 17의 제곱근은 4.123...이며 이를 기준으로 제곱근이하의 수에서 17의 약수가 1밖에 없다면 소수를 뜻한다.
 * - 
 * - 
 * 
 * - '소수'는 약수가 1과 자기 자신만 있는 수를 말한다.
 * - '약수'는 어떠한 수를 나누어 떨어지게 하는 수이다.
 * - 
 */

const n = 60;
const m = 100;



const isPrime = (number)=>{
    if(number == 1) return false
    for(let n = 2; n <= Math.ceil(Math.sqrt(number)) ; n++){
        if(number % n == 0) return false
    }
    return true
}
console.log(isPrime(1))

let prime = {};

// n부터 m까지 조회
for(let number = n ; number <= m ; number++){

    // 2. 소수의 배수를 집어여

    // 1. 각 자연수가 소수인지 판별
    isPrime(number) && console.log(number);
    
}