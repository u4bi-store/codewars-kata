/* 1day
    2017-11-16 */

/* 8 Kyu : String repeat
    주어진 수만큼 문자열 반복 */
const repeatStr = (n, s) => s.repeat(n);
/* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat */

/* 8 Kyu : Opposite number
    주어진 수 반전 */
const opposite = (number) => -number;

/* 7 Kyu : List Filtering
    배열에 든 원소중 문자열을 제외한 값 출력 */
const filter_list = (l) => l.filter(v => typeof(v) === 'number');

/* 7 Kyu : Descending Order
    내림차순 정렬 */
const descendingOrder = (n) => +n.toString().split('').sort().reverse().join('');

console.log(
    // repeatStr(5, '[u4bi]')
    // opposite(1)
    // filter_list([1, 2, 1.2 , -3, '[u4bi]', '[abcd]'])
    descendingOrder(21445)
);