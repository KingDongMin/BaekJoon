const fs = require('fs');
const input = fs.readFileSync("example_input.txt").toString().trim().split('\n')

/** [ 2675 - 문자열 반복 ] 
 * 주어진 횟수 만큼 문자열의 문자를 연속적으로 출력하기
 * 첫째줄 입력값은 테스트 케이스 숫자이다.
 * 둘째줄부턴 각 테스트 케이스 값이며 "반복횟수 문자열S"로 주어진다.
 */

// 테스트 케이스 총 갯수 초기화
const tests = Number(input[0]);

// 테스트 케이스 갯수를 통해 각 테스트 케이스 조회
for(let idx = 1 ; idx <= tests ; idx++){

    // 해당 테스트 케이스의 문자반복횟수와 문자열S 초기화
    const [iteration, string] = input[idx].split(' ');

    // 문자열의 각 문자를 반복횟수 만큼 연속 출력
    [...string].map(el=>{

        // 수정되는 부분
        for(let i = 0 ; i < iteration ; i++){
            process.stdout.write(el)
        }
    })
    process.stdout.write("\n")
}
// 나의 풀이 문제 : 시간 복잡도가 상당히 높다?

// 다른 사람 풀이 : 문자 반복시 repeat
// for문 대신 String의 repeat메소드를 사용하면 일정 횟수 만큼 문자열을 반복하여 새로운 문자열을 반환한다.
// process.stdout.write(el.repeat(iteration));