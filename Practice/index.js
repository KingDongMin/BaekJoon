const fs = require('fs');

const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** 공 빼기
 * 조금 더 리펙토링이 필요
 * 왜 틀렸다는 걸까?
  */


// N, M을 추출 
// map을 통해 각 요소마다 +를 붙여주면 string -> number로 형변환 됨
const [N, M] = input[0].split(" ").map(el => +el)

// 배열 선언
// - item이 N개인 배열을 초기화
// - 초기엔 empty items
let arr = new Array(N);

for(let i = 1 ; i <= M ; i++){
    
    let [start, end , k] = input[i].split(" ").map(el => +el);
    
    for(start ; start <= end ; start ++){
        arr[start-1] = k;
    }
}

// 아무값도 넣어지지 않은 상자는 empty ( undefinded)이므로 0으로 변환
for(let j=0; j<arr.length; j++){

    // 타입을 비교 가능?
    // 삼항 연산자에   a = 1 과 같이 변수 초기화 가능?

    typeof arr[j] === "undefined" ? arr[j] = 0 : arr[j]
}

// 배열의 join : 모든 요소를 연결해 하나의 string으로 변환
console.log(arr.join(" "));
