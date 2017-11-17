/* 2day
    2017-11-17 */

/* 8 Kyu : Find Maximum and Minimum Values of a List
    배열의 최소 최대 반환 */
const min = (list) => list.sort( (a, b) => a - b)[0];
const max = (list) => list.sort( (a, b) => b - a)[0];
const min2 = (list) => Math.min(...list);
const max2 = (list) => Math.max(...list);

/* 7 Kyu : Reversed Strings
    문자열의 반전 */
const solution = (str) => str.split('').reverse().join('');

/* 7 Kyu : Exes and Ohs
    x와 o의 수가 같은지 판별 */
const XO = (str) => {
    let arr = str.toLowerCase().split(''),
        oVal = arr.filter(v => v === 'o'),
        xVal = arr.filter(v => v === 'x');

    return oVal.length === xVal.length ? true : false;
}
/* 7  Kyu : Counting Array Elements
    배열에 담긴 수 세기
*/
const count = (array) => {
    let set = {};

    array.map(v => set[v] ? set[v]++ : set[v] = 1);
    return set;
}
const count2 = (array) => array.reduce( (set, v) => ( set[v] ? set[v]++ : set[v] = 1, set ), {} );

console.log(
    // min([5,4,3,2,1]), max([5,4,3,2,1]),
    // min2([5,4,3,2,1]), max2([5,4,3,2,1])
    // solution('[u4bi]')
    // XO('xxoo')
    count(['u4bi','u4bi','de']), count2(['u4bi','u4bi','de'])
);