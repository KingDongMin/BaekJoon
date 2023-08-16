const fs = require('fs');
const input = fs.readFileSync('example_input.txt').toString().trim().split('\n');

/** 
 * [ 5086 - 배수와 약수 ]
 * -주어진 첫번째 수와 두번째 수가 서로 약수, 배수 관계인지 혹은 아무관계도 아닌지 출력하기.
 */

//  0 0까지 출력하기
const arr = input.map(el=>{
    return el.split(' ').map(el=>+el)
})


// 각 수 비교하기
for(ele of arr){

    if(ele[0] == 0 && ele[1] == 0) break;

    if( ele[0] < ele[1] && ele[1]%ele[0]==0){
        console.log('factor')
    }else if(ele[0] > ele[1] && ele[0]%ele[1]==0){
        console.log('multiple')
    }else{
        console.log("neither")
    }
}