// require : 특정 모듈을 사용하기 위한 명령어
// fs 모듈 : FileSystem 모듈의 약자로 특정 파일을 사용하기 위한 모듈
const fs = require('fs');

// fs모듈의 readFileSync : 특정 파일을 가져옴
const input = fs.readFileSync('example_input.txt').toString().split('\n');

// fs모듈로 가져온 텍스트 파일 값을 변수로 이용,연산
const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);
const result = num1 + num2;

// 출력
console.log(result)

