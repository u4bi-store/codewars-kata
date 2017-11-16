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

/* 8 Kyu : Remove First and Last Character
    첫번째와 마지막 문자열 제거 */
const removeChar = (str) => str.slice(1, -1);

/* 8 Kyu : Convert number to reversed array of digits
    주어진 수를 역순으로 정렬 후 배열로 변환 */
const digitize = (n) => n.toString().split('').reverse().map(e => +e);

/* 8 Kyu : Return Negative
    음수로 변환 만약 음수면 그대로 반영 */
const makeNegative = (num) => num === 0 ? num : -Math.abs(num);

/* 8 Kyu ; Rock Paper Scissors
    가위바위보 */
const rps = (p1, p2) => {
    if(p1 === p2) return 'Draw!';

    return (p1 === 'rock'     && p2 === 'scissors') ||
           (p1 === 'paper'    && p2 === 'rock')     ||
           (p1 === 'scissors' && p2 === 'paper')
           ? 'Player 1 won!' : 'Player 2 won!';
};
const rps2 = (p1, p2) => {
    let map = {
        'rock'     : 'scissors',
        'paper'    : 'rock',
        'scissors' : 'paper'
    };
    
    return (p1 === p2) ? 'Draw!' : 'Player ' + (map[p1] === p2 ? 1 : 2) + ' won!';
};

console.log(
    // repeatStr(5, '[u4bi]')
    // opposite(1)
    // filter_list([1, 2, 1.2 , -3, '[u4bi]', '[abcd]'])
    // descendingOrder(21445)
    // removeChar('[u4bi]')
    // digitize(348597)
    // makeNegative(1), makeNegative(-1), makeNegative(0)
    rps('paper', 'paper'), rps('paper', 'rock'), rps('rock', 'paper'),
    rps2('paper', 'paper'), rps2('paper', 'rock'), rps2('rock', 'paper')
);