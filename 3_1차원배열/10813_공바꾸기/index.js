const fs = require('fs');

const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')


/**
 * [ 10813 : 공 바꾸기 ]
 * N개의 바구니는 각 번호를 가지고 있으며 그 안에는 공이 1개씩 들어가 있다.
 * 공은 바구니 번호와 같다.
 * 제시된 입력값에 따라 각 바구니의 공을 바꾼뒤 모든 바구니를 출력한다.
 * 
 */

// 맵을 이용해봐?

const [N, M] = input[0].split(" ").map(string=>+string);
 // N : 바구니 갯수, M : 총 교환 횟수 / 형변환 map을 이용
// 형변환시 map의 인자를 .map(Number)로 간단히 표현 가능
// ! map의 매개변수가 Number함수에 똑같이 쓰이니 생략이 가능?

 
const baskets = new Map();
// 바구니 = map 객체

for(let i = 1 ; i <= N ; i++){
    baskets.set(i,i);
}
// 바구니 세팅

for(let idx = 1 ; idx <= M ; idx++){
    const [ i , j ] = input[idx].split(" ").map(string=> +string);

    const basket_I_value = baskets.get(i);
    const basket_J_value = baskets.get(j);
    baskets.set(i, basket_J_value);
    baskets.set(j, basket_I_value);
    
}
// M번의 교환을 진행


console.log([...baskets.values()].join(" ")) // 출력

