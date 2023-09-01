const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/**
    [ 14215 - 세 막대 ]
    - 길이가 1 <= a,b,c <= 100 인 세 막대를 가지고 최대 둘레를 가지는 삼각형을 구하는 프로그램을 작성하시오.
    - 단, 막대의 길이는 마음대로 줄일 수 있다.

    [ 사고 과정 ]
    - 세 변의 길이를 알 때 삼각형을 만들 수 있다.
    - 가장 긴 변의 길이가 나머지 변들의 합보다 작으면 삼각형이 성립된다.

    [ 풀이 과정 ]
    1. 입력값을 받아와 각 요소를 int로 변환
    2. Set을 이용하여 세 변의 길이가 모두 같을때 연산
    3. Set.size가 1이라면 세 변의 길이가 모두 같으므로 세 변의 길이를 합하여 출력
    4. 세 변의 길이 중 가장 긴 변 찾기
    5. 가장 긴 변의 인덱스를 indexOf로 검색하여 filter로 제외하고 reduce를 통해 나머지 변을 합한다.
    6. 가장 긴 변보다 나머지 변들의 합이 크다면 가장 긴 변을, 아니라면 나머지 변들의 합 -1을 가장 긴 변으로 초기화.
    7. 가장 긴 변과 나머지 변들의 합을 출력.

    [ 리 뷰 ]
    - 공식을 통해 쉽게 구현할 수 있지만 filter, reduce, Set을 연습하기 위해 다소 복잡하게 풀었다.
    - filter : 배열에서 반환값이 true인 요소만 새로운 배열로 초기화한다.
    - reduce((acc,cur)=>...) : 배열의 각 요소를 조회하여 연산하는 메소드이다. 반환값은 acc에 담긴다.
    - Set(...arr) : 요소들 중 중복값을 제거한 자료구조이며 주로 매개변수에 배열을 ...spread로 풀어 중복을 제거한다.
 */



const sides = input[0].split(' ').map(el=>+el) // 1.
const same = new Set(sides)// 2.

if(same.size === 1){ // 3.
    const sum = sides.reduce((acc,cur)=>acc+cur)
    console.log(sum)

}else{

    let max = Math.max(...sides); // 4.
    let sum = sides.filter((el,idx)=>sides.indexOf(max)!== idx).reduce((acc,cur)=>acc+cur) //5.
    max = max < sum ? max : sum-1 // 6.

    console.log(max+sum) // 7.

}

// 다른 방법
const [a,b,c] = input[0].split(' ').map(el=>+el).sort((a,b)=>b-a)
console.log(a < (b+c) ? a+b+c : 2*(b+c)-1)
