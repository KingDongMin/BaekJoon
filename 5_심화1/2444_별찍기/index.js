const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 2444 - 별 찍기 ]
 * 입력 값에 따른 별 찍기 -> 다이아몬드
 */

// 배운 개념 fill

// 입력된 N의 값을 2*N-1번째 줄까지 반복하기 위한 Num 초기화
const num = 2*Number(input[0])-1

// 별의 최대 갯수는 Num이므로 Num의 크기를 가진 배열 생성
// 배열의 초기값은 ' ' 공백으로 처리
let arr = Array.from({length:num},()=>' ')

// 배열의 중간 인덱스 ( 별은 배열의 중앙부터 찍어진다.)
let half = parseInt(arr.length/2)


for(let i = 0 ; i < arr.length ; i++){
    
    // 반복횟수가 Num을 넘어서면 양쪽의 *을 제거
    if ( i > half){
        
        // 배열의 첫 인덱스부터 *을 순차적으로 제거
        // 배열의 첫 인덱스부터 순차적 증가 = (-half+i)-1;
        arr.fill(' ',(-half+i)-1,(-half+i) )

        // 배열의 끝 인덱스부터 *을 순차적으로 제거
        // 배열의 끝 인덱스부터 순차적으로 감소 = half-i
        arr.fill(' ',half-i)
    }else{
        // 배열의 중간(half)인덱스를 중점으로 *을 추가
        arr.fill('*', half-i , half+(i+1))
    }

    console.log(`${i} ${arr.join('')}`)
}

// #1 실패 -> *의 뒤에는 공백이 없음
// -> 별의 갯수를 홀수로 증감하며 앞 부분에 그에 맞는 공백을 입력할것

/* [ 주석 제거 ]

const num = 2*Number(input[0])-1
let arr = Array.from({length:num},()=>' ')
let half = parseInt(arr.length/2)

for(let i = 0 ; i < arr.length ; i++){
    
    if ( i > half){
        arr.fill(' ',(-half+i)-1,(-half+i) )
        arr.fill(' ',half-i)
    }else{
        arr.fill('*', half-i , half+(i+1))
    }

    console.log(`${i} ${arr.join('')}`)
}

*/