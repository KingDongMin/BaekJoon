const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');


/** [ 2587 - 대표값2 ]
 * - 주어진 배열의 모든 원소를 합하여 평균을 구하고 배열을 나열 하였을때 중앙값을 출력하여라.
  */

// 평균 구하기 
const arr = input.map(el=>+el)

// 평균을 구하기 앞서 배열을 나열하기
// 어떻게? 버블 정렬로 오름차순으로 정렬하기
for(let i = arr.length-1 ; 0 < i ; i-- ){
    for(let j=0 ; j < i ; j++){
        if(arr[j] >= arr[j+1]){
            const temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
        }
    }
}

// ! Math 총 합 // 이건 없고 arr.reduce가 있다
// reduce란 뜻은 뭘까? 줄이다 . 왜 합인데 줄여? 배열을 줄이다? 합으로?

// 평균값
console.log(arr.reduce((acc, curr)=>acc+curr)/arr.length)

// 그럼 중앙값은 어떻게 찾을 수 있는가?
// 문제는 다섯개의 자연수가 주어진다고 했다 그럼 다섯개에서 중앙 값은 3번째이다.
console.log(arr[2])

// 다른 사람 풀이 리뷰
// sort를 사용하여 풀었다.
// 중앙값은 Math.floor를 이용하였다. Math.floor란 뭘까?
console.log(Math.floor(14/3)) // floor는 소수점을 버리는 메서드이다.
console.log(14/3)


/** 결론
 * 
 * 다섯개의 원소를 가진 배열에서 원소들의 평균과 배열의 중앙값을 찾는 문제를 풀면서 버블정렬과 중앙값을 찾는 Math.floor를 학습하였다.
 * 
 */






