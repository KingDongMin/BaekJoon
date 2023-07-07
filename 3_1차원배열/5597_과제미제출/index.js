const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')


/**
 * [ 5597 : 과제 안낸넘 ]
 *
 *  - 30명의 학생 중 과제를 안낸 사람 찾기
 *  - 안낸 사람은 총 2명이 있다.
 *  - 입력값은 과제를 낸 사람들의 학번 리스트다.
 *  - 학번 리스트에 존재하지 않은 학번을 출력한다. (오름차순)
 * 
 * < 분석 >
 *  
 *  - 이번엔 배열의 특성을 이용해 본다?
 *  - 30의 크기인 배열을 만든다.
 *  - 거기서 undefined 값을 가지는 인덱스를 뽑는다?
 *  - 어떻게 탐색을 효율적으로 할까?
 */

//-------------------- [ map을 이용하는 방법 ] --------------------------
const map = new Map();

// map 객체에 30개의 요소를 생성
// 기본값은 false
for(let i= 1 ; i <= 30; i++){
    map.set(i, false)
}

// 입력 값에 해당하는 값을 해당 요소를 변경
for(student of input){
    map.set(Number(student) , true);
}


const arr = [];

// 다시 조회하여 false인 부분 arr에 추가
for(item of map){
    item[1] === false && arr.push(item[0]) 
}

console.log(arr.join("\n"))


// ---------------------------[ 배열을 이용하는 방법 ] ---------------------------
console.log(`--------- 배열 ------------`)

// Array 객체와 from 메소드를 사용하여 길이가 30인 배열을 만들고 기본 값은 false로 세팅
const array = Array.from({length:30},()=>false)

// 길이가 30인 배열은 총 학생의 학번 리스트이다.
// 입력데이터는 제출한 학생의 학번이므로 이에 해당하는 배열 인덱스가 있다면 true로 초기화
for(let i = 0 ; i <= input.length ; i++){
    const idx = Number(input[i])-1
    array[idx] = true;
}

// 출력을 위한 배열 선언
const rs = [];

// 츨력 rs 배열에 push를 이용하여 배열 안 값이 false인 첫번째 학생의 학번을 indexOf를 이용하여 삽입
rs.push(array.indexOf(false)+1);

// 제출을 하지 않는 학생은 2명으로 고정되므로 배열의 뒤에서 부터 탐색하는 lastIndexOf를 이용해 false인 학생의 학번을 삽입
rs.push(array.lastIndexOf(false)+1);

// 결과값 출력 : join : 배열의 모든 값을 문자열로 치환
console.log(rs.join("\n"))


/**
 * --------- 배운 개념 ------
 *  - indexOf : 목표 배열 안에서 특정 값에 해당하는 첫번째 요소의 index를 출력 / 배열의 첫번째 인덱스부터 탐색
 *  - lastIndexOf : indexOf와 같지만 배열의 마지막 인덱스부터 거꾸로 탐색
 *  - filter는 배열의 특정 조건에 해당하는 요소만을 반환 / 추가된 index 파라미터 값은 반환되지 않음
 */