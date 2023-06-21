// 요거 파일을 제외하고 Add를 해야게쓔
const fs = require('fs');

const input = fs.readFileSync('example_input.txt').toString().split('\n');

// 정렬정렬 김정렬 오름차순 김정렬

const arr = input.map(item => Number(item.replace(/\r/g,"")))


// 어떤 정렬을 써야하지? 일단은 알겠어
// 일단 중복값을 지워야하는데 어케 지우누?
// 일단은 한번 내 방식대로 해보고 증답 찾기

// 어케 지우누... 뭐 구글링 하면 바로 나오겠지
// 하지만 이건 알고리즘 인걸!! 생각 생각 생강차


const test = arr.sort((next, pre)=>{
    return next;
})

console.log(test)