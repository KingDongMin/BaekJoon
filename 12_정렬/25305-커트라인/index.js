const fs = require('fs');
const input = fs
    .readFileSync('example_input.txt')
    .toString()
    .trim()
    .split('\n');

/** [ 25305 - 커트라인 ]
 * -  N명의 학생들 중 상을 받는 사람은 k명이다.
 * - 상을 받을 인원이 k명일때 커트라인을 구하시오.
 * - 커트라인은 k명 중에서 가장 낮은 사람의 점수이다.
 *
 *
 * [ 사고 과정 ]
 * - 상을 받는 사람을 찾기 위해 학생들의 점수 배열을 내림차순으로 정렬한다.
 * - 입상자들이 k명일때 k번째 학생이 커트라인 점수이다.
 */

const [member, runnerUp] = input[0].split(' ').map(el => +el);
const scores = input[1]
    .split(' ')
    .map(el => +el)
    .sort((a, b) => b - a);

console.log(scores[runnerUp - 1]);
